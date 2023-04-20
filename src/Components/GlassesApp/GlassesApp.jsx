import React, { Component } from 'react'
import Model from './Model/Model'
import GlassItem from './GlassItem/GlassItem'

export default class GlassesApp extends Component {
  state = {
    modelGlass: {
      id: 0,
      price: 0,
      name: 'Normal',
      url: '',
      desc: 'Choose glasses for more details and view product pictures with models. Have fun!',
    },
    glassReturn: {
      id: 0,
      price: 0,
      name: 'Normal',
      url: '',
      desc: 'Choose glasses for more details and view product pictures with models. Have fun!',
    },
    glassList: [
      {
        id: 1,
        price: 30,
        name: 'GUCCI G8850U',
        url: './glassesImage/v1.png',
        desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ',
      },
      {
        id: 2,
        price: 50,
        name: 'GUCCI G8759H',
        url: './glassesImage/v2.png',
        desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ',
      },
      {
        id: 3,
        price: 30,
        name: 'DIOR D6700HQ',
        url: './glassesImage/v3.png',
        desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ',
      },
      {
        id: 4,
        price: 70,
        name: 'DIOR D6005U',
        url: './glassesImage/v4.png',
        desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ',
      },
      {
        id: 5,
        price: 40,
        name: 'PRADA P8750',
        url: './glassesImage/v5.png',
        desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ',
      },
      {
        id: 6,
        price: 60,
        name: 'PRADA P9700',
        url: './glassesImage/v6.png',
        desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ',
      },
      {
        id: 7,
        price: 80,
        name: 'FENDI F8750',
        url: './glassesImage/v7.png',
        desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ',
      },
      {
        id: 8,
        price: 100,
        name: 'FENDI F8500',
        url: './glassesImage/v8.png',
        desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ',
      },
      {
        id: 9,
        price: 60,
        name: 'FENDI F4300',
        url: './glassesImage/v9.png',
        desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ',
      },
    ],
    buttonActive: 0,
  }
  /* Pick Glass To Model */
  pickGlass = (glass) => {
    this.setState({
      modelGlass: glass,
      glassReturn: glass,
      buttonActive: glass.id,
    })
  }
  /* Reset Model To Default */
  resetGlass = () => {
    this.setState({
      modelGlass: {
        id: 0,
        price: 0,
        name: 'Normal',
        url: '',
        desc: 'Choose glasses for more details and view product pictures with models. Have fun!',
      },
      glassReturn: {
        id: 0,
        price: 0,
        name: 'Normal',
        url: '',
        desc: 'Choose glasses for more details and view product pictures with models. Have fun!',
      },
      buttonActive: 0,
    })
  }
  /* Undo Model Default*/
  undoModel = () => {
    this.setState({
      modelGlass: {
        id: 0,
        price: 0,
        name: 'Normal',
        url: '',
        desc: 'Choose glasses for more details and view product pictures with models. Have fun!',
      },
    })
  }
  /* Return Glass Is Select*/
  returnGlass = () => {
    this.setState({
      modelGlass: this.state.glassReturn,
    })
  }
  render() {
    return (
      <div className="container py-5">
        {/* Title */}
        <h3 className="text-white mb-5 text-center text-uppercase">
          CyberSoft - Pick Glass App Onine
        </h3>
        <div className="row">
          <div className="col-6 row">
            {/* Glass Item */}
            {this.state.glassList.map((glass) => {
              return (
                <div className="col-4" key={glass.id}>
                  <GlassItem
                    glassInfo={glass}
                    pickGlass={() => {
                      this.pickGlass(glass)
                    }}
                    active={glass.id === this.state.buttonActive}
                  />
                </div>
              )
            })}
            {/* Button Event */}
            <div className="col-12 row">
              <div className="col-6 text-center">
                <button
                  className="btn btn-primary w-50"
                  onMouseDown={this.undoModel}
                  onMouseUp={this.returnGlass}
                  onMouseLeave={this.returnGlass}
                >
                  Preview Undo
                </button>
              </div>
              <div className="col-6 text-center">
                <button
                  className="btn btn-danger w-50"
                  onClick={this.resetGlass}
                >
                  Reset
                </button>
              </div>
            </div>
          </div>
          {/* Model */}
          <div className="col-6">
            <div className="w-50 mx-auto">
              <Model modelGlass={this.state.modelGlass} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
