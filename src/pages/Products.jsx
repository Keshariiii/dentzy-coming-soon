import React from 'react';
import './Products.css';
import completeDenture from '../assets/products/complete_denture_new.jpg';
import flexibleDenture from '../assets/products/flexible_denture_new.jpg';
import rpd from '../assets/products/rpd.jpg';
import crowns from '../assets/products/metal_crowns_new.jpg';
import pfm from '../assets/products/pfm_new.jpg';
import zirconia from '../assets/products/zirconia_new.jpg';

const products = [
    {
        id: 1,
        title: "Complete Denture (single arch)",
        description: "Tooth loss can significantly affect a person's appearance, confidence, and ability to chew. A complete denture (single arch) is a reliable and time-tested solution for patients who have lost all teeth in either the upper (maxillary) or lower (mandibular) arch.",
        image: completeDenture
    },
    {
        id: 2,
        title: "Flexible Denture",
        description: "Flexible dentures are removable dental prostheses made from advanced thermoplastic materials rather than conventional acrylic or metal frameworks. Their flexible nature allows the denture to adapt comfortably to the natural contours of the gums, offering a secure and natural fit.",
        image: flexibleDenture
    },
    {
        id: 3,
        title: "Removable Partial Denture",
        description: "Missing one or more teeth can affect chewing, speech, and overall confidence. A Removable Partial Denture (RPD) is a practical and effective tooth replacement option that restores function and aesthetics while preserving remaining natural teeth.",
        image: rpd
    },
    {
        id: 4,
        title: "Metal Crowns And Bridges",
        description: "A dental metal crown is a full-coverage restoration that protects and strengthens a damaged or heavily restored tooth. A metal bridge replaces one or more missing teeth by anchoring artificial teeth to metal crowns placed on adjacent natural teeth.",
        image: crowns
    },
    {
        id: 5,
        title: "PFM",
        description: "A PFM crown (Porcelain-Fused-to-Metal crown) has long been one of the most trusted restorations in dentistry. Known for combining the strength of metal with the natural appearance of porcelain, PFM crowns offer a reliable and cost-effective solution for restoring damaged or weakened teeth.",
        image: pfm
    },
    {
        id: 6,
        title: "Ziconia",
        description: "A zirconia crown is a full-coverage dental restoration made from zirconium dioxide, a high-strength ceramic material. It can be fabricated as: \n • Monolithic zirconia (single solid structure) \n • Layered zirconia (zirconia core with ceramic layering for enhanced aesthetics) \n Zirconia crowns are designed using advanced CAD/CAM technology, ensuring exceptional precision and consistency.",
        image: zirconia
    }
];

const Products = () => {
    return (
        <div className="products-page">
            <div className="products-container">
                {products.map((product) => (
                    <div className="product-section" key={product.id}>
                        <div className="product-image-wrapper">
                            <img src={product.image} alt={product.title} className="product-image" />
                        </div>
                        <div className="product-info">
                            <h2 className="product-title">{product.title}</h2>
                            <div className="product-description">
                                {product.description.split('\n').map((line, index) => (
                                    <p key={index} style={{ marginBottom: line.startsWith(' •') ? '0' : '10px' }}>
                                        {line}
                                    </p>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <footer className="products-footer animate-on-scroll">
                <p>We will continue to expand our offerings with new services in the future.</p>
            </footer>
        </div>
    );
};

export default Products;
