import React from 'react';
import BeSmarter from './BeSmarter';
import BeSmarterArticle from './BeSmarterArticle';

const BeSmarterLoop = () => {
    return (
        <div className=' gap-40'>
            <BeSmarterArticle title="CSS Framework" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio voluptatum rerum repudiandae nobis quae, autem minima eius doloribus recusandae minus?" number="1"></BeSmarterArticle>
            <BeSmarterArticle title="Components" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita eum tempora maxime, praesentium veritatis consectetur quia laudantium pariatur." another="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente unde explicabo natus consequuntur laborum dolores, asperiores sint, eveniet deserunt porro illum aut ab earum non ducimus, cumque nam qui minima itaque ipsam ad esse. Atque architecto molestiae assumenda inventore dignissimos." number="2"></BeSmarterArticle>
            <BeSmarterArticle title="Global Editors" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt natus totam deleniti corporis cupiditate non aperiam adipisci quasi repellendus possimus." number="3"></BeSmarterArticle>
        </div>
    );
};

export default BeSmarterLoop;