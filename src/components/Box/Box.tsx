"use client"

import { useEffect, useRef } from "react"
import * as THREE from "three"

export function ThreeBox() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    // Setup
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(55, 1, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })

    const container = containerRef.current
    const resizeRenderer = () => {
      if (!container) return
      renderer.setSize(container.clientWidth, container.clientHeight)
      camera.aspect = container.clientWidth / container.clientHeight
      camera.updateProjectionMatrix()
    }
    resizeRenderer()

    container.appendChild(renderer.domElement)

    // 创建外部盒子线框
    const boxGeometry = new THREE.BoxGeometry(2, 2, 2)
    const edges = new THREE.EdgesGeometry(boxGeometry)
    const boxMaterial = new THREE.LineBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.3,
    })
    const wireframe = new THREE.LineSegments(edges, boxMaterial)

    // 创建内部复杂结构
    const createComplexStructure = () => {
      const points = []
      const geometries = []
      
      // 创建多个连接点
      const vertices = []
      // 创建中心点
      vertices.push(new THREE.Vector3(0, 0, 0))
      
      // 创建多个随机点形成棱锥状结构
      for (let i = 0; i < 8; i++) {
        const theta = (i / 8) * Math.PI * 2
        const y = Math.random() * 1.6 - 0.8
        const radius = Math.random() * 0.8 + 0.4
        const x = Math.cos(theta) * radius
        const z = Math.sin(theta) * radius
        vertices.push(new THREE.Vector3(x, y, z))
      }

      // 创建连接线
      for (let i = 1; i < vertices.length; i++) {
        // 连接到中心点
        points.push(vertices[0].x, vertices[0].y, vertices[0].z)
        points.push(vertices[i].x, vertices[i].y, vertices[i].z)

        // 连接到相邻点
        points.push(vertices[i].x, vertices[i].y, vertices[i].z)
        const nextIndex = (i + 1) % vertices.length
        if (nextIndex !== 0) {
          points.push(vertices[nextIndex].x, vertices[nextIndex].y, vertices[nextIndex].z)
        }

        // 创建一些随机的交叉连接
        if (Math.random() > 0.5) {
          const randomIndex = Math.floor(Math.random() * vertices.length)
          points.push(vertices[i].x, vertices[i].y, vertices[i].z)
          points.push(vertices[randomIndex].x, vertices[randomIndex].y, vertices[randomIndex].z)
        }
      }

      // 创建一些额外的随机连接线
      for (let i = 0; i < 12; i++) {
        const v1 = vertices[Math.floor(Math.random() * vertices.length)]
        const v2 = vertices[Math.floor(Math.random() * vertices.length)]
        points.push(v1.x, v1.y, v1.z)
        points.push(v2.x, v2.y, v2.z)
      }

      const geometry = new THREE.BufferGeometry()
      geometry.setAttribute("position", new THREE.Float32BufferAttribute(points, 3))
      
      const material = new THREE.LineBasicMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 0.4,
      })

      return new THREE.LineSegments(geometry, material)
    }

    // 创建多个复杂结构
    const structures = []
    for (let i = 0; i < 3; i++) {
      const structure = createComplexStructure()
      structure.rotation.x = Math.random() * Math.PI
      structure.rotation.y = Math.random() * Math.PI
      structures.push(structure)
      scene.add(structure)
    }

    scene.add(wireframe)

    // Position camera
    camera.position.z = 4
    camera.position.y = 1
    camera.position.x = 2
    camera.lookAt(0, 0, 0)

    // Animation
    let time = 0
    const animate = () => {
      requestAnimationFrame(animate)
      time += 0.001

      // 旋转外部线框
      wireframe.rotation.x += 0.001
      wireframe.rotation.y += 0.002

      // 为每个结构添加独特的动画
      structures.forEach((structure, index) => {
        structure.rotation.x += 0.001 * (index + 1)
        structure.rotation.y += 0.002 * (index + 1)
        
        // 添加呼吸效果
        const scale = 1 + Math.sin(time * 2 + index) * 0.1
        structure.scale.set(scale, scale, scale)
        
        // 添加轻微的位置波动
        structure.position.x = Math.sin(time * 1.5 + index) * 0.1
        structure.position.y = Math.cos(time * 2 + index) * 0.1
        structure.position.z = Math.sin(time * 2.5 + index) * 0.1
      })

      renderer.render(scene, camera)
    }
    animate()

    // Handle resize
    const handleResize = () => {
      resizeRenderer()
    }
    window.addEventListener("resize", handleResize)

    // Cleanup
    return () => {
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement)
      }
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <div ref={containerRef} className="w-full h-full">
      {/* Three.js canvas will be inserted here */}
    </div>
  )
}