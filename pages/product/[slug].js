import React, { useRef, useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus, AiFillStar, AiOutlineStar, AiOutlineWhatsApp } from 'react-icons/ai';
import ReactWhatsapp from 'react-whatsapp';
import { client, urlFor } from '../../lib/client';
import { Product } from '../../components';
import { useStateContext } from '../../context/StateContext';


const ProductDetails = ({ product, products }) => {
  const { image, name, details, price } = product;
  const [index, setIndex] = useState(0);
  const { decQty, incQty, qty, onAdd, setShowCart } = useStateContext();

  const inputname = useRef(null);
  const [updatedname, setUpdatedname] = useState('');

  const inputqty = useRef(null);
  const [updatedqty, setUpdatedqty] = useState('');
  const form = useRef();


  const handleBuyNow = (event) => {
    event.preventDefault();
    setUpdatedname(inputname.current.value);
    console.log(updatedname)
    setUpdatedqty(inputqty.current.value);
    console.log(updatedqty)

    const inputNameValue = inputname.current.value;
    const inputQtyValue = inputqty.current.value;

    if (
      inputNameValue.trim() !== '' ||
      inputMobileValue.trim() !== '' ||
      inputQtyValue.trim() !== ''
    ) {
      window.location.href = `https://wa.me/917977175538?text=Hello%20Shabnam%20Bags.%20My%20name%20is%20${inputNameValue}%20and%20I%20am%20interested%20to%20buy%20${name}%20at%20${price}%20in%20a%20quantity%20of%20${inputQtyValue}.%20Please%20revert%20back%20as%20soon%20as%20possible%20`
    } else {
    }
  };




  return (
    <div>
      <div className="product-detail-container">
        <div>
          <div className="image-container">
            <img src={urlFor(image && image[index])} className="product-detail-image" alt='slug' />
          </div>
          <div className="small-images-container">
            {image?.map((item, i) => (
              <img
                key={i}
                src={urlFor(item)}
                className={i === index ? 'small-image selected-image' : 'small-image'}
                onMouseEnter={() => setIndex(i)} alt='slug2' />
            ))}
          </div>
        </div>

        <div className="product-detail-desc">
          <h1>{name}</h1>
          <div className="reviews">
            <div>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
            </div>
            <p>
              (20)
            </p>
          </div>
          <h4>Details: </h4>
          <p>{details}</p>
          <p className="price">₹{price}</p>
          <form onSubmit={handleBuyNow}>
            <div className="quantity name">
              <h3>Name:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h3>
              <br className='brslug' />
              <p className="quantity-desc">


                <input type='text' ref={inputname} className='num' min="20" name='user_name' required placeholder="Enter Name"></input>


              </p>
            </div>
            <div className="quantity">
              <h3>Quantity:</h3>
              <br className='brslug' />
              <p className="quantity-desc">


                <input type='number' className='num' min="6" ref={inputqty} name='user_quantity' placeholder='Minimum Quantity is 6 piece' required></input>
              </p>
            </div>

            <button type="submit" className="enquiry">
              Enquiry
            </button>
          </form>

        </div>
      </div>
      <div className="maylike-products-wrapper">
        <h2>You may also like</h2>
        <div className="marquee">
          <div className="maylike-products-container track">
            {products.map((item) => (
              <Product key={item._id} product={item} />
            ))}
          </div>
        </div>

      </div >
    </div >
  )
}

export const getStaticPaths = async () => {
  const query = `*[_type == "product"] {
    slug {
      current
    }
  }
  `;

  const products = await client.fetch(query);

  const paths = products.map((product) => ({
    params: {
      slug: product.slug.current
    }
  }));

  return {
    paths,
    fallback: 'blocking'
  }
}

export const getStaticProps = async ({ params: { slug } }) => {
  const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
  const productsQuery = '*[_type == "product"]'

  const product = await client.fetch(query);
  const products = await client.fetch(productsQuery);

  console.log(product);

  return {
    props: { products, product }
  }
}

export default ProductDetails