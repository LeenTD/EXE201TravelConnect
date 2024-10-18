import React from 'react';

function CartItem({ course, onRemove, onUpdateQuantity }) {
    const handleQuantityChange = (event) => {
        const newQuantity = parseInt(event.target.value, 10);
        onUpdateQuantity(course.id, newQuantity);
    };

    return (
        <tr>
            <th scope="row">
                {course.title}
            </th>
            <td >
                {(course.totalMoneyMonthTeaching).toLocaleString('vi-VN')} VNĐ
            </td>
            <td >
                <input
                    type="number"
                    min={0}
                    max={9999}
                    step={1}
                    value={course.quantity}
                    onChange={handleQuantityChange}
                    className='text-center'
                />
            </td>
            <td >
                {(course.totalMoneyMonthTeaching * course.quantity).toLocaleString('vi-VN')} VNĐ
            </td>
            <td>
                <img
                    alt='icon'
                    width={20}
                    src="img/icons/icon-remove-red.svg"
                    onClick={() => onRemove(course.id)}
                />
            </td>
        </tr>
    );
}

export default CartItem;