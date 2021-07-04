import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import './_categoriesBar.scss';
import { getPopularVideos, getVideosByCategory } from '../../redux/actions/videos.action';

const keywords = [
    "All",
    'Marathi',
    "Sports",
    "Entertainment",
    "Cricket",
    "Movie",
    "Treaking",
    "Vlogs",
    "Games",
    "Laptop",
    "science",
    "Technology",
    "React js",
    "HTML",
    "CSS",
    "Javascript",
    "Python",
    "Web Devlopment",
    
]

const CategoriesBar = ()=>
{
    const [activeCategory, setActiveCategory] = useState('All');

    const dispatch = useDispatch()
    const handleACtiveCategory = (item) =>
    {
        setActiveCategory(item);
        if(item === 'All') dispatch(getPopularVideos())
        else{
            dispatch(getVideosByCategory(item))
        }    
    }
    return (
        <div className="categoriesBar">
            {
                keywords.map((item, index) =>
                {
                    return (
                        <span
                            key={index}
                            onClick={() => handleACtiveCategory(item)}
                            className={activeCategory === item ? 'active' : ''}
                        > {item}
                        </span>
                    )
                })
            }
        </div>
    )
}

export default CategoriesBar
