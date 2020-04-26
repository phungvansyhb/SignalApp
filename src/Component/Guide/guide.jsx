import React, { Component } from 'react'
import './guide.css'
export default class Guide extends Component {
    render() {
        return (
            <div className='guide' id='guide'>
                <span>
                    {' '}
                    Signi thực hiện tính toán phép tích chập các tín hiệu giúp bạn , để lấy được kết quả hãy nhập các
                    xung vào ô trống , để thêm xung nhấn nút thêm , để bỏ xung nhấn nút xóa lưu ý xung bạn nhập phải
                    đúng format , nhưng nếu chẳng may bạn nhập thừa một chữ Sign vẫn có thể châm trước mà tính kết quả
                    cho bạn Signi vẫn đang trong quá trình học hỏi vậy nên vẫn chưa thể tính toán với phân số và số phức
                    mong bạn thông cảm
                </span>

                <span className='mt-4'>Mục hướng dẫn sẽ được ghi chú đầy đủ ghi app hoàn thiện tất cả chức năng !</span>
            </div>
        )
    }
}
