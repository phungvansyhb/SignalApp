import React, {Component} from 'react';
import './calculator.style.css'
import {resize_input} from './helper'
class Calculator extends Component {
    componentDidMount() {
        resize_input();
    }

    render() {
        return (
            <div className='caculator' id='caculator'>
               <div className='wrap-cacul'>
                   <h2 className='mt-3 mb-2'> May tinh Signi</h2>
                   <form name='form' >


                       <div className='signal'>
                           <span> <strong>x1 </strong></span><input type='text'/>
                       </div>


                       <div className='choose-method custom-select'>
                            <span><strong>Chon phep tinh</strong></span>
                               <select>
                                   <option value="0">cong</option>
                                   <option value="1">tru</option>
                                   <option value="2">nhan</option>
                                   <option value="3">tich chap</option>
                                   <option value="4">tu tuong quan</option>

                               </select>

                       </div>

                       <div className='signal row'>

                           <div className='col-8'>
                               <span> X1 : [ </span>
                               {/*xung*/}
                               <span id="hide"></span>
                               <input id="txt" type="text" defaultValue="nhap xung..."/>
                               {/*xung*/}

                               <span> ]</span>
                           </div>

                          <div className='col-3'>
                              <div className= 'btn-group'>
                                  <button className='btn btn-danger'>xoa</button>
                                  <button className='btn btn-primary'>them xung</button>
                              </div>
                          </div>
                       </div>

                        <button type='submit' className='btn btn-success'> Ket qua</button>

                   </form>
                   <div className='result'> day la ket qua

                   </div>
               </div>


            </div>
        );
    }
}

export default Calculator;