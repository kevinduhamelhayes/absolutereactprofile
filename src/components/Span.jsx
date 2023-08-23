import "./styles/Span.css"

const Span = () => {
  return (
    <div className="Span-container">
      <div className="Span-img">
        <figure className="Span-figure1">
          <img className="Span-img1" src="./public/span1.jpeg" alt="" />
        </figure>
        <figure className="Span-figure2">
          <img className="Span-img2" src="./public/span2.jpeg" alt="" />
        </figure>
      </div>
      <div className="Span-yellow"></div>
    </div>
  )
}

export default Span
