import React from 'react';

const ReviewRow = ({review}) => {
    const {client, message} = review;

    return (
        <tr>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{client}</div>
            </div>
          </div>
        </td>
        <td>
          {message}
        </td>
        <td></td>
        <th>
          <button className="btn btn-ghost btn-xs"></button>
        </th>
      </tr>
    );
};

export default ReviewRow;