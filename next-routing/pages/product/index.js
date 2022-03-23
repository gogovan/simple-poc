import Link from "next/link";

 /*
    Simple Product List Rendering and Link navigation back to previous page
    and replace to go Home page instead of going back to previous page
   example: http://localhost:3000/product
    */

function ProductList({ productId = 100 }) {
    return (
        <>
            <Link href={ "/" }>
                <a>Home</a>
            </Link>
            <h2>
                <Link href={ "/product/1" }>
                    <a>Product 1</a>
                </Link>
            </h2>
            <h2>
                <Link href={ "/product/2" }>
                    <a>Product 2</a>
                </Link>
            </h2>
            <h2>
                <Link href={ "/product/3" } replace>
                    <a>Product 3</a>
                </Link>
            </h2>
            <h2>
                <Link href={ `/product/${productId}` }>
                    <a>Product { productId }</a>
                </Link>
            </h2>

        </>

    );
}

export default ProductList;