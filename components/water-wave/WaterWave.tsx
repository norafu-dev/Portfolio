"use client";

import React, { useRef, useEffect, useState } from "react";
import * as THREE from "three";
import {
  simulationVertexShader,
  simulationFragmentShader,
  renderVertexShader,
  renderFragmentShader,
} from "./shaders";
import { useTheme } from "next-themes";

// 使用DOM原生事件类型
type MouseEventType = MouseEvent;
type TouchEventType = TouchEvent;

const BACKGROUND_COLOR = {
  light: "#fffdfa",
  dark: "#31322d",
};
const TEXT_COLOR = {
  light: "#ff7a2e",
  dark: "#fffdfa",
};

const WaterWave = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // 引用
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const simSceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.OrthographicCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const simMaterialRef = useRef<THREE.ShaderMaterial | null>(null);
  const renderMaterialRef = useRef<THREE.ShaderMaterial | null>(null);
  const rtARef = useRef<THREE.WebGLRenderTarget | null>(null);
  const rtBRef = useRef<THREE.WebGLRenderTarget | null>(null);
  const textTextureRef = useRef<THREE.Texture | null>(null);
  const frameRef = useRef(0);
  const rafRef = useRef<number | null>(null);
  const mouseRef = useRef(new THREE.Vector2(0, 0));
  const renderQuadRef = useRef<THREE.Mesh | null>(null);
  const simQuadRef = useRef<THREE.Mesh | null>(null);
  const planeRef = useRef<THREE.PlaneGeometry | null>(null);

  // 初始化Three.js
  useEffect(() => {
    if (!containerRef.current) return;
    let mountedAndReady = true;

    // 初始化函数
    const init = () => {
      try {
        const width = window.innerWidth;
        const height = window.innerHeight;
        const dpr = Math.min(window.devicePixelRatio, 2);

        // 1. 创建场景、相机
        const scene = new THREE.Scene();
        const simScene = new THREE.Scene();
        const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

        sceneRef.current = scene;
        simSceneRef.current = simScene;
        cameraRef.current = camera;

        // 2. 创建渲染器
        const renderer = new THREE.WebGLRenderer({
          antialias: true,
          alpha: true,
          preserveDrawingBuffer: true,
        });
        renderer.setSize(width, height);
        renderer.setPixelRatio(dpr);
        if (containerRef.current) {
          containerRef.current.appendChild(renderer.domElement);
        }
        rendererRef.current = renderer;

        // 3. 创建渲染目标纹理
        const renderTargetOptions = {
          type: THREE.FloatType,
          format: THREE.RGBAFormat,
          minFilter: THREE.LinearFilter,
          magFilter: THREE.LinearFilter,
          stencilBuffer: false,
          depthBuffer: false,
        };

        const rtWidth = width * dpr;
        const rtHeight = height * dpr;
        const rtA = new THREE.WebGLRenderTarget(
          rtWidth,
          rtHeight,
          renderTargetOptions
        );
        const rtB = new THREE.WebGLRenderTarget(
          rtWidth,
          rtHeight,
          renderTargetOptions
        );
        rtARef.current = rtA;
        rtBRef.current = rtB;

        // 4. 创建文本纹理
        const textTexture = createTextTexture(rtWidth, rtHeight);
        textTextureRef.current = textTexture;

        // 5. 创建模拟材质
        const simMaterial = new THREE.ShaderMaterial({
          vertexShader: simulationVertexShader,
          fragmentShader: simulationFragmentShader,
          uniforms: {
            textureA: { value: null },
            mouse: { value: mouseRef.current },
            resolution: { value: new THREE.Vector2(rtWidth, rtHeight) },
            time: { value: 0 },
            frame: { value: 0 },
          },
        });
        simMaterialRef.current = simMaterial;

        // 6. 创建渲染材质
        const renderMaterial = new THREE.ShaderMaterial({
          vertexShader: renderVertexShader,
          fragmentShader: renderFragmentShader,
          uniforms: {
            textureA: { value: null },
            textureB: { value: textTexture },
          },
          transparent: true,
        });
        renderMaterialRef.current = renderMaterial;

        // 7. 创建全屏平面
        const plane = new THREE.PlaneGeometry(2, 2);
        planeRef.current = plane;

        const simQuad = new THREE.Mesh(plane, simMaterial);
        const renderQuad = new THREE.Mesh(plane, renderMaterial);

        simQuadRef.current = simQuad;
        renderQuadRef.current = renderQuad;

        simScene.add(simQuad);
        scene.add(renderQuad);

        // 8. 设置鼠标交互
        const handleMouseMove = (e: MouseEventType) => {
          mouseRef.current.x = e.clientX * dpr;
          mouseRef.current.y = (height - e.clientY) * dpr;
        };

        const handleMouseLeave = () => {
          mouseRef.current.set(0, 0);
        };

        // 添加鼠标点击事件
        const handleMouseDown = (e: MouseEventType) => {
          // 创建更强的点击波纹效果
          const x = e.clientX * dpr;
          const y = (height - e.clientY) * dpr;
          mouseRef.current.set(x, y);

          // 添加定时器使效果更明显
          setTimeout(() => {
            if (mountedAndReady) mouseRef.current.set(x, y);
          }, 50);
          setTimeout(() => {
            if (mountedAndReady) mouseRef.current.set(x, y);
          }, 100);
        };

        const handleTouchStart = (e: TouchEventType) => {
          if (e.touches.length > 0) {
            const x = e.touches[0].clientX * dpr;
            const y = (height - e.touches[0].clientY) * dpr;
            mouseRef.current.set(x, y);

            // 添加定时器使效果更明显
            setTimeout(() => {
              if (mountedAndReady) mouseRef.current.set(x, y);
            }, 50);
            setTimeout(() => {
              if (mountedAndReady) mouseRef.current.set(x, y);
            }, 100);
          }
        };

        const handleTouchMove = (e: TouchEventType) => {
          if (e.touches.length > 0) {
            mouseRef.current.x = e.touches[0].clientX * dpr;
            mouseRef.current.y = (height - e.touches[0].clientY) * dpr;
          }
        };

        // 添加自动波纹效果
        const createRandomRipple = () => {
          if (!mountedAndReady) return;

          // 随机位置产生波纹
          const x = Math.random() * rtWidth;
          const y = Math.random() * rtHeight;
          mouseRef.current.set(x, y);

          // 重置鼠标位置
          setTimeout(() => {
            if (mountedAndReady) mouseRef.current.set(0, 0);
          }, 150);

          // 定期触发波纹
          if (mountedAndReady) {
            setTimeout(createRandomRipple, 3000 + Math.random() * 2000);
          }
        };

        // 启动自动波纹
        setTimeout(createRandomRipple, 2000);

        renderer.domElement.addEventListener("mousemove", handleMouseMove);
        renderer.domElement.addEventListener("mouseleave", handleMouseLeave);
        renderer.domElement.addEventListener("mousedown", handleMouseDown);
        renderer.domElement.addEventListener("touchstart", handleTouchStart);
        renderer.domElement.addEventListener("touchmove", handleTouchMove);

        // 9. 处理窗口大小变化
        const handleResize = () => {
          if (!mountedAndReady || !rendererRef.current) return;

          const newWidth = window.innerWidth;
          const newHeight = window.innerHeight;
          const newDpr = Math.min(window.devicePixelRatio, 2);
          const newRtWidth = newWidth * newDpr;
          const newRtHeight = newHeight * newDpr;

          // 更新渲染器
          rendererRef.current.setSize(newWidth, newHeight);
          rendererRef.current.setPixelRatio(newDpr);

          // 更新渲染目标
          if (rtARef.current) rtARef.current.setSize(newRtWidth, newRtHeight);
          if (rtBRef.current) rtBRef.current.setSize(newRtWidth, newRtHeight);

          // 更新材质的分辨率
          if (simMaterialRef.current && simMaterialRef.current.uniforms) {
            simMaterialRef.current.uniforms.resolution.value.set(
              newRtWidth,
              newRtHeight
            );
          }

          // 更新文本纹理
          if (renderMaterialRef.current && renderMaterialRef.current.uniforms) {
            const newTextTexture = createTextTexture(newRtWidth, newRtHeight);
            if (textTextureRef.current) textTextureRef.current.dispose();
            textTextureRef.current = newTextTexture;
            renderMaterialRef.current.uniforms.textureB.value = newTextTexture;
          }
        };

        window.addEventListener("resize", handleResize);

        // 10. 动画循环
        const animate = () => {
          if (!mountedAndReady) return;

          if (
            !rendererRef.current ||
            !simMaterialRef.current ||
            !renderMaterialRef.current ||
            !rtARef.current ||
            !rtBRef.current ||
            !sceneRef.current ||
            !simSceneRef.current ||
            !cameraRef.current ||
            !textTextureRef.current
          ) {
            return;
          }

          const frame = frameRef.current++;
          const time = performance.now() / 1000;

          // 更新模拟材质参数，让水波纹效果更加明显
          simMaterialRef.current.uniforms.frame.value = frame;
          simMaterialRef.current.uniforms.time.value = time;
          simMaterialRef.current.uniforms.textureA.value =
            rtARef.current.texture;

          // 每帧都保持鼠标交互同步
          simMaterialRef.current.uniforms.mouse.value = mouseRef.current;

          // 第一个渲染步骤：渲染模拟到rtB
          rendererRef.current.setRenderTarget(rtBRef.current);
          rendererRef.current.render(simSceneRef.current, cameraRef.current);

          // 第二个渲染步骤：使用rtB和文本纹理渲染到屏幕
          renderMaterialRef.current.uniforms.textureA.value =
            rtBRef.current.texture;
          renderMaterialRef.current.uniforms.textureB.value =
            textTextureRef.current;
          rendererRef.current.setRenderTarget(null);
          rendererRef.current.render(sceneRef.current, cameraRef.current);

          // 交换缓冲区 - 使用原始script.js中相同的交换方式
          const temp = rtARef.current;
          rtARef.current = rtBRef.current;
          rtBRef.current = temp;

          // 请求下一帧动画
          rafRef.current = requestAnimationFrame(animate);
        };

        // 启动动画
        animate();

        // 返回清理函数
        return () => {
          mountedAndReady = false;

          // 停止动画
          if (rafRef.current) {
            cancelAnimationFrame(rafRef.current);
            rafRef.current = null;
          }

          // 移除事件监听器
          if (rendererRef.current && rendererRef.current.domElement) {
            rendererRef.current.domElement.removeEventListener(
              "mousemove",
              handleMouseMove
            );
            rendererRef.current.domElement.removeEventListener(
              "mouseleave",
              handleMouseLeave
            );
            rendererRef.current.domElement.removeEventListener(
              "mousedown",
              handleMouseDown
            );
            rendererRef.current.domElement.removeEventListener(
              "touchstart",
              handleTouchStart
            );
            rendererRef.current.domElement.removeEventListener(
              "touchmove",
              handleTouchMove
            );
          }

          window.removeEventListener("resize", handleResize);

          // 从场景中移除对象
          if (sceneRef.current && renderQuadRef.current) {
            sceneRef.current.remove(renderQuadRef.current);
          }

          if (simSceneRef.current && simQuadRef.current) {
            simSceneRef.current.remove(simQuadRef.current);
          }

          // 释放几何体和材质
          if (planeRef.current) {
            planeRef.current.dispose();
            planeRef.current = null;
          }

          if (renderMaterialRef.current) {
            renderMaterialRef.current.dispose();
            renderMaterialRef.current = null;
          }

          if (simMaterialRef.current) {
            simMaterialRef.current.dispose();
            simMaterialRef.current = null;
          }

          // 释放渲染目标
          if (rtARef.current) {
            rtARef.current.dispose();
            rtARef.current = null;
          }

          if (rtBRef.current) {
            rtBRef.current.dispose();
            rtBRef.current = null;
          }

          // 释放文本纹理
          if (textTextureRef.current) {
            textTextureRef.current.dispose();
            textTextureRef.current = null;
          }

          // 移除渲染器
          if (rendererRef.current) {
            try {
              // 安全地检查DOM元素是否存在
              if (containerRef.current && rendererRef.current.domElement) {
                if (
                  containerRef.current.contains(rendererRef.current.domElement)
                ) {
                  containerRef.current.removeChild(
                    rendererRef.current.domElement
                  );
                }
              }
            } catch (error) {
              console.error("清理渲染器时出错:", error);
            }

            rendererRef.current.dispose();
            rendererRef.current = null;
          }

          // 清理引用
          renderQuadRef.current = null;
          simQuadRef.current = null;
          sceneRef.current = null;
          simSceneRef.current = null;
          cameraRef.current = null;
        };
      } catch (error) {
        console.error("init error:", error);
        return () => {};
      }
    };

    const cleanup = init();
    return cleanup;
  }, []);

  // 创建文本纹理的辅助函数
  const createTextTexture = (width: number, height: number): THREE.Texture => {
    try {
      // 创建画布
      const canvas = document.createElement("canvas");
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext("2d", { alpha: true });

      if (!ctx) {
        console.error("无法获取2D渲染上下文");
        return new THREE.Texture();
      }

      // 绘制背景
      ctx.fillStyle =
        BACKGROUND_COLOR[(mounted ? theme : "light") as "light" | "dark"];
      ctx.fillRect(0, 0, width, height);

      // 绘制文本 - 使用和原始代码相同的尺寸计算和字体
      const fontSize = Math.round(250 * window.devicePixelRatio);
      ctx.fillStyle =
        TEXT_COLOR[(mounted ? theme : "light") as "light" | "dark"];
      ctx.font = `bold ${fontSize}px Loreka`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = "high";

      // 安全地设置文本渲染
      try {
        (ctx as CanvasRenderingContext2D).textRendering = "geometricPrecision";
      } catch {
        // 忽略不支持的属性
      }

      ctx.fillText("NORA FU", width / 2, height / 2);

      // 创建纹理
      const texture = new THREE.CanvasTexture(canvas);
      texture.minFilter = THREE.LinearFilter;
      texture.magFilter = THREE.LinearFilter;
      texture.format = THREE.RGBAFormat;
      texture.needsUpdate = true;

      return texture;
    } catch (error) {
      console.error("createTextTexture error", error);
      return new THREE.Texture();
    }
  };

  return <div ref={containerRef} style={{ width: "100%", height: "100%" }} />;
};

export default WaterWave;
