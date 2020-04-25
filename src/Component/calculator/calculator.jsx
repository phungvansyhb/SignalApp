import React, { Component } from 'react'
import './calculator.style.css'
import { resize_input } from './helper'
import { connect } from 'react-redux'
import Input from './../input'
import { Add1, Remove1, Add2, Remove2 ,GetSign } from './../../action/signalAction'
class Calculator extends Component {
   
    componentDidMount() {
        resize_input()
    }

    componentDidUpdate() {
        resize_input()
    }
    render() {
        // fill to array for render easy
        let num1 = this.props.numSignal.numSign1
        let num2 = this.props.numSignal.numSign2
        let arr1 = new Array(num1).fill(0)
        let arr2 = new Array(num2).fill(0)
        
        return (
            <div className='caculator' id='caculator'>
                <div className='wrap-cacul'>
                    <h2 className='mt-3 mb-2'> May tinh Signi</h2>
                    <form name='form'>
                        <div className='signal row text-left'>
                            <div className='col-10 x2-signal'>
                                <span> X1 : [ </span>
                                {/* use array of 0 to render */}
                                {arr1.map((elm, key) => {
                                    return <Input key={key} stt={"1"+key} change={this.props.GetSign}/>
                                })}

                                <span> ]</span>
                            </div>

                            <div className='col-2'>
                                <div className='btn-group'>
                                    {num1 > 0 ? (
                                        <button className='btn btn-danger' type="button" onClick={() => this.props.Remove1()}>
                                            Xoa
                                        </button>
                                    ) : (' ')
                                    }
                                    <button className='btn btn-primary' type="button" onClick={() => this.props.Add1()}>
                                        Them xung
                                    </button>
                                </div>
                            </div>
                        </div>
{/* 
                        <div className='choose-method custom-select'>
                            <span>
                                <strong>Chon phep tinh</strong>
                            </span>
                            <select>
                                <option value='0'>cong</option>
                                <option value='1'>tru</option>
                                <option value='2'>nhan</option>
                                <option value='3'>tich chap</option>
                                <option value='4'>tu tuong quan</option>
                            </select>
                        </div> */}
                        <h2>Tích chập</h2>
                        <div className='signal row text-left'>
                            <div className='col-10 x2-signal'>
                                <span> X2 : [ </span>
                                {arr2.map((elm, key) => {
                                    return <Input key={key} stt={"2"+key} change={this.props.GetSign}/>
                                })}

                                <span> ]</span>
                            </div>

                            <div className='col-2'>
                                <div className='btn-group'>
                                    {num2 > 0 ? (
                                        <button className='btn btn-danger' type="button" onClick={() => this.props.Remove2()}>
                                            Xoa
                                        </button>
                                    ) : (' ')
                                    }
                                    <button className='btn btn-primary' type="button" onClick={() => this.props.Add2()}>
                                        them xung
                                    </button>
                                </div>
                            </div>
                        </div>

                        <button type='submit' className='btn btn-success'>
                            {' '}
                            Ket qua
                        </button>
                    </form>
                    <div className='result'> day la ket qua</div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        numSignal: state.numSignal,
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        Add1: () => {
            dispatch(Add1())
        },
        Remove1: () => {
            dispatch(Remove1())
        },
        Add2: () => {
            dispatch(Add2())
        },
        Remove2: () => {
            dispatch(Remove2())
        },
        GetSign: (index , value) => {
            dispatch(GetSign(index ,value))
        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Calculator)
