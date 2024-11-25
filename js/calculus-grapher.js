const CalculusGrapher = () => {
  const [activeTab, setActiveTab] = React.useState("1")
  const [points, setPoints] = React.useState([])
  const [isDrawing, setIsDrawing] = React.useState(false)
  const [showDerivative, setShowDerivative] = React.useState(false)
  const [showIntegral, setShowIntegral] = React.useState(false)
  const [function1, setFunction1] = React.useState("Math.sin(x)")
  const [function2, setFunction2] = React.useState("Math.cos(x)")
  const canvasRef = React.useRef(null)
  const [scale, setScale] = React.useState(100) // pixels per unit
  const [offset, setOffset] = React.useState({ x: 0, y: 0 })

  React.useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // Draw grid
    drawGrid(ctx)

    // Draw axes
    drawAxes(ctx)

    // Draw function
    if (activeTab === "1") {
      if (points.length > 0) {
        drawFunction(ctx, points, 'blue')
      }
    } else if (activeTab === "2") {
      drawMathFunction(ctx, function1, 'blue')
    } else if (activeTab === "3") {
      drawMathFunction(ctx, function1, 'blue')
      drawMathFunction(ctx, function2, 'green')
    } else if (activeTab === "4") {
      drawMathFunction(ctx, function1, 'blue')
    }

    // Draw derivative
    if (showDerivative) {
      if (activeTab === "1" && points.length > 1) {
        const derivativePoints = calculateDerivative(points)
        drawFunction(ctx, derivativePoints, 'red')
      } else if (["2", "3", "4"].includes(activeTab)) {
        drawMathFunction(ctx, `derivative(${function1})`, 'red')
      }
    }

    // Draw integral
    if (showIntegral) {
      if (activeTab === "1" && points.length > 1) {
        const integralPoints = calculateIntegral(points)
        drawFunction(ctx, integralPoints, 'green')
      } else if (["2", "3", "4"].includes(activeTab)) {
        drawMathFunction(ctx, `integral(${function1})`, 'green')
      }
    }
  }, [activeTab, points, showDerivative, showIntegral, scale, offset, function1, function2])

  const drawGrid = (ctx) => {
    ctx.strokeStyle = '#ddd'
    ctx.lineWidth = 0.5

    for (let x = 0; x < ctx.canvas.width; x += scale) {
      ctx.beginPath()
      ctx.moveTo(x, 0)
      ctx.lineTo(x, ctx.canvas.height)
      ctx.stroke()
    }

    for (let y = 0; y < ctx.canvas.height; y += scale) {
      ctx.beginPath()
      ctx.moveTo(0, y)
      ctx.lineTo(ctx.canvas.width, y)
      ctx.stroke()
    }
  }

  const drawAxes = (ctx) => {
    const centerX = ctx.canvas.width / 2 + offset.x
    const centerY = ctx.canvas.height / 2 + offset.y

    ctx.strokeStyle = '#000'
    ctx.lineWidth = 2

    ctx.beginPath()
    ctx.moveTo(0, centerY)
    ctx.lineTo(ctx.canvas.width, centerY)
    ctx.stroke()

    ctx.beginPath()
    ctx.moveTo(centerX, 0)
    ctx.lineTo(centerX, ctx.canvas.height)
    ctx.stroke()
  }

  const drawFunction = (ctx, points, color) => {
    ctx.strokeStyle = color
    ctx.lineWidth = 2
    ctx.beginPath()

    points.forEach((point, index) => {
      const x = (point.x * scale) + ctx.canvas.width / 2 + offset.x
      const y = ctx.canvas.height / 2 - (point.y * scale) + offset.y

      if (index === 0) {
        ctx.moveTo(x, y)
      } else {
        ctx.lineTo(x, y)
      }
    })

    ctx.stroke()
  }

  const drawMathFunction = (ctx, func, color) => {
    ctx.strokeStyle = color
    ctx.lineWidth = 2
    ctx.beginPath()

    const mathFunc = (x) => {
      return eval(func)
    }

    for (let x = -ctx.canvas.width / (2 * scale); x <= ctx.canvas.width / (2 * scale); x += 0.1) {
      const y = mathFunc(x)
      const canvasX = (x * scale) + ctx.canvas.width / 2 + offset.x
      const canvasY = ctx.canvas.height / 2 - (y * scale) + offset.y

      if (x === -ctx.canvas.width / (2 * scale)) {
        ctx.moveTo(canvasX, canvasY)
      } else {
        ctx.lineTo(canvasX, canvasY)
      }
    }

    ctx.stroke()
  }

  const calculateDerivative = (points) => {
    return points.map((point, index, arr) => {
      if (index === 0 || index === arr.length - 1) return { x: point.x, y: 0 }
      
      const dx = arr[index + 1].x - arr[index - 1].x
      const dy = arr[index + 1].y - arr[index - 1].y
      return {
        x: point.x,
        y: dy / dx
      }
    })
  }

  const calculateIntegral = (points) => {
    let area = 0
    return points.map((point, index) => {
      if (index === 0) return { x: point.x, y: 0 }
      
      const dx = point.x - points[index - 1].x
      const avgHeight = (point.y + points[index - 1].y) / 2
      area += dx * avgHeight
      
      return {
        x: point.x,
        y: area
      }
    })
  }

  const handleCanvasMouseDown = (e) => {
    if (activeTab !== "1") return
    setIsDrawing(true)
    const canvas = canvasRef.current
    if (!canvas) return

    const rect = canvas.getBoundingClientRect()
    const x = (e.clientX - rect.left - canvas.width / 2 - offset.x) / scale
    const y = -(e.clientY - rect.top - canvas.height / 2 - offset.y) / scale

    setPoints([{ x, y }])
  }

  const handleCanvasMouseMove = (e) => {
    if (!isDrawing || activeTab !== "1") return
    const canvas = canvasRef.current
    if (!canvas) return

    const rect = canvas.getBoundingClientRect()
    const x = (e.clientX - rect.left - canvas.width / 2 - offset.x) / scale
    const y = -(e.clientY - rect.top - canvas.height / 2 - offset.y) / scale

    setPoints(prev => [...prev, { x, y }])
  }

  const handleCanvasMouseUp = () => {
    setIsDrawing(false)
  }

  const handleClear = () => {
    setPoints([])
  }

  return (
    <div className="calculus-grapher">
      <h1 className="text-4xl font-bold text-center mb-8">Calculus Grapher</h1>
      
      <div className="tabs mb-8">
        <button className={`tab ${activeTab === '1' ? 'active' : ''}`} onClick={() => setActiveTab('1')}>1. Draw Function</button>
        <button className={`tab ${activeTab === '2' ? 'active' : ''}`} onClick={() => setActiveTab('2')}>2. Input Function</button>
        <button className={`tab ${activeTab === '3' ? 'active' : ''}`} onClick={() => setActiveTab('3')}>3. Compare Functions</button>
        <button className={`tab ${activeTab === '4' ? 'active' : ''}`} onClick={() => setActiveTab('4')}>4. Function Analysis</button>
      </div>

      <div className="graph-container">
        <div className="mb-4 flex gap-4 flex-wrap">
          <div>
            <label htmlFor="scale">Scale:</label>
            <input
              id="scale"
              type="number"
              value={scale}
              onChange={(e) => setScale(Number(e.target.value))}
              min={10}
              max={100}
            />
          </div>
          {activeTab === "1" && (
            <button onClick={handleClear}>Clear Drawing</button>
          )}
          {["2", "3", "4"].includes(activeTab) && (
            <div>
              <label htmlFor="function1">Function 1:</label>
              <input
                id="function1"
                type="text"
                value={function1}
                onChange={(e) => setFunction1(e.target.value)}
              />
            </div>
          )}
          {activeTab === "3" && (
            <div>
              <label htmlFor="function2">Function 2:</label>
              <input
                id="function2"
                type="text"
                value={function2}
                onChange={(e) => setFunction2(e.target.value)}
              />
            </div>
          )}
          <button
            onClick={() => setShowDerivative(!showDerivative)}
            className={showDerivative ? 'active' : ''}
          >
            {showDerivative ? 'Hide' : 'Show'} Derivative
          </button>
          <button
            onClick={() => setShowIntegral(!showIntegral)}
            className={showIntegral ? 'active' : ''}
          >
            {showIntegral ? 'Hide' : 'Show'} Integral
          </button>
        </div>

        <canvas
          ref={canvasRef}
          width={800}
          height={600}
          className="border border-gray-300 rounded-lg cursor-crosshair"
          onMouseDown={handleCanvasMouseDown}
          onMouseMove={handleCanvasMouseMove}
          onMouseUp={handleCanvasMouseUp}
          onMouseLeave={handleCanvasMouseUp}
        />

        {activeTab === "4" && (
          <div className="mt-4">
            <h3 className="text-xl font-semibold mb-2">Function Analysis</h3>
            <p>Domain: All real numbers (for basic trigonometric functions)</p>
            <p>Range: [-1, 1] (for sine and cosine functions)</p>
            <p>Period: 2π (for sine and cosine functions)</p>
            <p>Roots: At x = nπ, where n is any integer (for sine function)</p>
            <p>Maximum: 1 (for sine and cosine functions)</p>
            <p>Minimum: -1 (for sine and cosine functions)</p>
          </div>
        )}
      </div>
    </div>
  )
}

ReactDOM.render(<CalculusGrapher />, document.getElementById('calculus-grapher-component'))

