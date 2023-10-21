import React from 'react'
import './DescriptionBox.css'

export const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">
                Description
            </div>
            <div className="descriptionbox-nav-box fade">
                Reviews(122)
            </div>
        </div>
        <div className="descriptionbox-description">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam perferendis nulla reiciendis consequuntur praesentium, obcaecati voluptas assumenda? Quas sequi rem dolores, dolorem consequatur dolor, sapiente ex veniam itaque iste et!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat vel laboriosam expedita quas laudantium quam impedit.</p>
        </div>
    </div>
  )
}
