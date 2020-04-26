import React, { Component } from 'react'
import './calculator.style.css'
import { resize_input } from './helper'
import { connect } from 'react-redux'
import Input from './../input'
import { Add1, Remove1, Add2, Remove2 ,GetSign,CaculResult } from './../../action/signalAction'
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
                        <div className='signal row no-gutters text-left'>
                            <div className='col-10 x-signal'>
                                <span> X1 : [ </span>
                                {/* use array of 0 to render */}
                                {arr1.map((elm, key) => {
                                    return <Input key={key} stt={"1"+key} change={this.props.GetSign}/>
                                })}

                                <span> ]</span>
                            </div>

                            <div className='col-2 col-btn'>
                                 <div className="btn-remove"onClick={() => this.props.Remove1()}>Xoa</div>
                                 <div className="btn-add"onClick={() => this.props.Add1()}>them</div>
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
                        <div className='signal row no-gutters text-left'>
                            <div className='col-10 x-signal'>
                                <span> X2 : [ </span>
                                {arr2.map((elm, key) => {
                                    return <Input key={key} stt={"2"+key} change={this.props.GetSign}/>
                                })}
                                <span> ]</span>
                            </div>

                            <div className='col-2 col-btn'>
                                <div className="btn-remove"onClick={() => this.props.Remove2()}>Xoa</div>
                                <div className="btn-add"onClick={() => this.props.Add2()}>them</div>
                            </div>
                        </div>

                        <button type='button' className='btn btn-primary' onClick={()=> this.props.CaculResult()}>
                            {' '}
                            Ket qua
                        </button>
                    </form>
                    <div className='wrap-result'>
                            <div className='message mb-2'>{(this.props.isError===true)?"Xin lỗi Signi không nhận ra tín hiệu của bạn!" :" "}</div>
                       <span>X1 * X2 = [ </span> 
                      {this.props.result.map( (elm , key) => {
                          return <span key = {key} className="result-elm">{elm}</span>
                      })}
                      <span>  ]</span>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        numSignal: state.numSignal,
        result : state.numSignal.result,
        ishide : state.numSignal.isHide,
        isError : state.numSignal.isError
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
        CaculResult: () => {
            dispatch(CaculResult())
        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Calculator)
