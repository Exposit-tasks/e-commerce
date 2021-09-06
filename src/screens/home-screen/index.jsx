import { useEffect } from 'react'
import ListProducts from '../../components/products'

import './index.scss'
import { useDispatch, useSelector } from 'react-redux'
import { listProducts } from '../../redux/product-list/actionCreator'
import { LoadingBox } from '../../components'

const HomeScreen = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(listProducts())
  }, [])
  const { products } = useSelector(state => state.productList)
  return (
    <div className="content">
      {products.length > 0 ? <ListProducts /> : <LoadingBox />}
    </div>
  )
}

export default HomeScreen
