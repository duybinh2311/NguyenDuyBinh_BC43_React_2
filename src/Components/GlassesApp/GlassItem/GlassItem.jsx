import React, { Component } from 'react'

export default class GlassItem extends Component {
  render() {
    const { glassInfo, pickGlass, active } = this.props
    return (
      <button
        className={`btn btn-outline-primary ${active ? 'active' : ''}`}
        onClick={pickGlass}
      >
        <img src={glassInfo.url} alt="" className="w-100" />
      </button>
    )
  }
}
