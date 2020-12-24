import React from 'react'
import MenuItem from '../menu-item/menu-item.component'
import './directory.styles.scss'
import { connect } from 'react-redux'
const directory = ({ directory }) => {
  const {sections} = directory
    return (
      <div className='directory-menu'>
        {
          sections.map(section => (
            <MenuItem
              key={section.id}
              title={section.title}
              imageUrl={section.imageUrl}
              size={section.size} />
          ))
        }
      
      </div>
    )
}
const mapStateToProps =state => ({
    directory:state.directory
  })
export default connect(mapStateToProps)(directory)