import React, { Component } from 'react'

export default class Model extends Component {
  render() {
    const { modelGlass } = this.props
    return (
      <div className="card position-relative">
        <img src="./glassesImage/model.jpg" alt="" className="w-100" />
        <img
          src={modelGlass.url}
          className="position-absolute w-50 translate-middle-x start-50"
          style={{ top: 100 }}
        />
        <div className="card-body bg-primary-subtle">
          <div className="d-flex justify-content-between">
            <h3 className="text-primary">{modelGlass.name}</h3>
            <p
              className={modelGlass.price !== 0 ? `fw-bold m-0 fs-5 text-primary` : `d-none`}
            >{`$${modelGlass.price}`}</p>
          </div>
          <p>{modelGlass.desc}</p>
        </div>
      </div>
    )
  }
}
