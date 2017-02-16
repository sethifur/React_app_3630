import React from 'react'
import './Tile.css';
/*let bookInfo = {
  bookTitle: "Oh, The Places You'll Go!",
  coverImage: 'https://images-na.ssl-images-amazon.com/images/I/518eq5NjZkL._SX359_BO1,204,203,200_.jpg',
  bookDetails: {
    author: 'Dr. Seuss',
    published: '22 Jan 1990',
    age: '2-8 years',
    isbn: '0679805273'
    }
}*/
export default (props)=>(
	<div className="tile">
		<figure>
			<img src={props.thumbnail}/>
		</figure>
		<section>
			<h2>{props.title}</h2>
		</section>
	</div>
);
