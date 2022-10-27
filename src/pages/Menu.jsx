import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { HiOutlineBell, HiOutlineSearch, HiOutlinePencilAlt, HiOutlinePlus, HiOutlineMinus, HiOutlineClipboardList } from 'react-icons/hi';

export default function Menu() {

    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [activeCategory, setActiveCategory] = useState("All");
    const [timer, setTimer] = useState(null);
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")) ? JSON.parse(localStorage.getItem("cart")) : []);
    const [total, setTotal] = useState(0);

    // component did mount
    useEffect(() => {
        getAllCategories();
        getAllProducts();
    }, [])

    // component did update
    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));

        const result = cart.reduce((prev, current) => {
            return prev + (current.price * current.qty)
        }, 0)

        setTotal(result);

    }, [cart])

    // get all categories
    const getAllCategories = () => {
        axios.get("http://localhost:5000/api/categories")
            .then((res) => {
                setCategories(res.data.data);
            })
            .catch((error) => {
                console.error(error);
            })
    }

    // get all products
    const getAllProducts = () => {
        axios.get("http://localhost:5000/api/products")
            .then((res) => {
                setProducts(res.data.data)
            })
            .catch((error) => {
                console.info(error)
            })
    }

    // get products by category id
    const getProductsByCategory = (id) => {

        axios.get(`http://localhost:5000/api/categories/${id}`)
            .then((res) => {
                setProducts(res.data.data.products)
            })
            .catch((error) => {
                console.error(error)
            })
    }

    // search products
    const searchProducts = (e) => {

        clearTimeout(timer)

        const newTimer = setTimeout(() => {
            const query = e.target.value;

            axios.post("http://localhost:5000/api/products/search", {
                query: query
            })
                .then((res) => {
                    setProducts(res.data.data);
                    setActiveCategory("All")
                })
                .catch((error) => {
                    console.error(error)
                })
        }, 1000)

        setTimer(newTimer)

    }

    // add to cart
    const addToCart = (product) => {
        const newCart = [...cart];

        const index = newCart.findIndex((e) => {
            return e.id === product.id
        })

        if (index == -1) {
            newCart.push({
                id: product.id,
                name: product.name,
                price: product.price,
                qty: 1
            });
        } else {
            newCart[index].qty += 1;
        }

        return setCart(newCart);
    }

    // change quantity
    const changeQty = (product, qty) => {
        // duplicate cart
        const newCart = [...cart];

        // find product index from cart
        const index = newCart.findIndex((e) => {
            return e.id === product.id
        })

        // change product qty
        const newQty = newCart[index].qty + qty;

        // check if qty < 1, remove from product cart
        if (newQty < 1) {
            newCart.splice(index, 1);

            return setCart(newCart);
        }

        // else, set product qty from input qty
        newCart[index].qty = newQty;

        // set new cart
        return setCart(newCart);
    }

    // change input quantity
    const inputChangeQty = (product, qty) => {
        // duplicate cart
        const newCart = [...cart];

        // find product index
        const index = newCart.findIndex((e) => {
            return e.id === product.id
        })

        // else, set qty from input qty
        newCart[index].qty = parseInt(qty);

        // set new cart
        setCart(newCart);

        clearTimeout(timer);

        const newTimer = setTimeout(() => {
            // check if input qty < 1, remove from cart
            if (qty === "" || qty < 1) {
                newCart.splice(index, 1);

                console.info(newCart);

                setCart([...newCart]);
            }
        }, 1000);

        setTimer(newTimer);


    }

    // format currency
    const currencyFormat = (number) => {
        return (number || "")
            .toString()
            .replace(/^0|\./g, "")
            .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
    }

    // handleSubmit
    const handleSubmit = () => {
        const order_details = cart.map((e) => {
            return (
                {
                    products_id: e.id,
                    price: e.price,
                    qty: e.qty
                }
            )
        })

        if (!order_details || !total) {
            return alert("Cart is empty!")
        }

        axios.post("http://localhost:5000/api/orders", {
            order_details: order_details,
            total: total
        })
            .then((res) => {
                alert("Order berhasil dibuat!");
                setCart([])
            })
            .catch((error) => {
                console.error(error)
            })
    }

    return (

        <div className='w-full h-full flex'>
            {/* Left content */}
            <div className='w-[800px] flex-1 flex flex-col pt-10 gap-8'>

                {/* Search Panel */}
                <div className='w-full h-12 flex justify-between items-center gap-4 px-10'>
                    <div className='flex justify-start w-full shadow-lg'>
                        <label htmlFor="searchProducts" className="text-2xl text-slate-500 bg-white p-4 rounded-l-lg" >
                            <HiOutlineSearch />
                        </label>

                        <input type="text" placeholder='Search products ...' id='searchProducts' name='searchProducts' className='rounded-r-lg flex-1 outline-none' onChange={searchProducts} />
                    </div>
                    <button className='bg-white p-4 rounded-lg shadow-lg'>
                        <HiOutlineBell className='text-2xl text-slate-500' />
                    </button>
                </div>

                {/* Category */}
                <div className='w-full overflow-x-auto scrollbar flex items-center gap-4 pb-4 px-10'>
                    <button className={`px-8 py-4 bg-white shadow-lg rounded-lg ${activeCategory === "All" ? "border-solid border-2 border-[#1D03BD]" : "hover:border-2"}`} onClick={() => {
                        getAllProducts();
                        setActiveCategory("All");
                    }}>All</button>

                    {categories.map((e) => {
                        return (
                            <button onClick={() => {
                                getProductsByCategory(e.id);
                                setActiveCategory(e.name);
                            }} key={e.id} className={`px-8 py-4 bg-white shadow-lg rounded-lg ${activeCategory === e.name ? "border-solid border-2 border-[#1D03BD]" : "hover:border-2"}`}>{e.name}</button>
                        )
                    })}

                </div>

                {/* Product Panel */}
                <div className='flex-1 overflow-y-auto grid grid-cols-4 gap-4  overflow-x-hidden scrollbar pb-8 pl-10 pr-4 mr-4'>

                    {products.map((e) => {
                        return (
                            <article key={e.id} className='h-[314px] flex flex-col bg-white items-center p-4 rounded-lg shadow-lg gap-4'>
                                <img src="https://via.placeholder.com/132" className='rounded-full object-cover' width={"132px"} height={"132px"} />
                                <h3 className='font-semibold text-[#1D03BD]'>{e.name}</h3>
                                <p>Rp. {currencyFormat(e.price)}</p>
                                <button className='w-full py-2 mt-2 bg-[#1D03BD] hover:bg-[#190983] text-white rounded-lg' onClick={() => {
                                    addToCart(e)
                                }}>Add to Cart</button>
                            </article>
                        )
                    })}

                </div>

            </div>


            {/* Right content */}
            <div className='w-[350px] flex flex-col pr-10 py-10 gap-4'>

                {/* Customer */}
                <div className='flex justify-between items-center h-12 bg-white shadow-lg gap-4 rounded-lg'>
                    {/* <img src="https://via.placeholder.com/32" width={"32px"} height={"32px"} className="rounded-full" /> */}
                    <h3 className='text-slate-700 pl-4 py-4 w-full font-semibold'>New Customer</h3>
                    <button className='h-full p-4'>
                        <HiOutlinePencilAlt className='text-2xl text-slate-500' />
                    </button>
                </div>

                {/* Order Detail */}
                <div className='flex flex-col justify-between p-4 bg-white shadow-lg gap-4 h-full rounded-lg'>

                    {/* Title */}
                    <div className='flex flex-col gap-4'>
                        <h2 className='text-slate-700 font-semibold'>Current Order</h2>
                        <hr />
                    </div>


                    {/* Cart List */}
                    <div className='flex flex-col gap-4 overflow-y-auto scrollbar max-h-[285px] 2xl:max-h-[570px] flex-1'>

                        {cart.map((e) => {
                            return (
                                <article key={e.id} className='flex justify-between items-center'>
                                    <img src="https://via.placeholder.com/32" width={"32px"} height={"32px"} className="rounded-full" />
                                    <div className='flex flex-col justify-center flex-1 px-4'>
                                        <h3 className=' text-[#1D03BD] font-semibold text-sm'>{e.name}</h3>
                                        <p className=' text-slate-500 text-sm'>Rp. {currencyFormat(e.price)}</p>
                                    </div>
                                    <div className='flex items-center gap-1'>
                                        <button className='p-2'>
                                            <HiOutlineMinus className='text-sm' onClick={() => {
                                                changeQty(e, -1)
                                            }} />
                                        </button>


                                        <input type={"number"} className='border border-solid border-slate-500 w-8 text-center focus:outline-none' value={e.qty} onChange={(event) => {
                                            inputChangeQty(e, event.target.value)
                                        }} />


                                        <button className='p-2'>
                                            <HiOutlinePlus className='text-sm' onClick={() => {
                                                changeQty(e, 1)
                                            }} />
                                        </button>
                                    </div>
                                </article>
                            )
                        })}

                    </div>


                    {/* Footer order */}
                    <div className='flex flex-col gap-2'>
                        <div className='flex justify-between items-center'>
                            <h3 className='text-slate-400'>Sub Total</h3>
                            <p className=' text-slate-700 font-semibold'>Rp. {total === 0 ? "0" : currencyFormat(total)},-</p>
                        </div>
                        <div className='flex justify-between items-center pt-2'>
                            <h3 className='text-slate-400'>Discount</h3>
                            <p className=' text-slate-700 font-semibold'>Rp. 0,-</p>
                        </div>
                        <hr />
                        <div className='flex justify-between items-center pb-2'>
                            <h3 className='text-slate-400 pt-2'>Total</h3>
                            <p className=' text-slate-700 font-semibold'>Rp. {total === 0 ? "0" : currencyFormat(total)},-</p>
                        </div>
                        <div className='w-full flex items-center justify-between gap-2'>
                            <button className='border border-solid border-[#1D03BD] rounded-lg p-2 shadow-lg'>
                                <HiOutlineClipboardList className='text-2xl text-slate-500' />
                            </button>
                            <button className='bg-[#1D03BD] hover:bg-[#190983] p-2 text-white flex-1 rounded-lg' onClick={handleSubmit}>Pay Now Rp. {total === 0 ? "0" : currencyFormat(total)},-</button>
                        </div>
                    </div>

                </div>

            </div>

        </div >

    )
}
