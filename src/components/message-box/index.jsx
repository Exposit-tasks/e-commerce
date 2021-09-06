import { Link } from 'react-router-dom'

import './index.scss'

const MessageBox = ({ label }) => (
  <Link to="/">
    <div className="message-box">
      <i className="fas fa-tshirt message-box__img" />
      <p className="message-box__text">{label}</p>
    </div>
  </Link>
)

export default MessageBox
