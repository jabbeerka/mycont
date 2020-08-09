import React, { useState } from 'react';
import styles from './Paginator.module.sass';
import prevIcon from '../../images/prev.png';
import nextIcon from '../../images/next.png';
import cn from 'classnames';

const Paginator = ({ totalItemsCount, pageSize, currentPage, setCurrentPage, portionSize = 10 }) => {
    let pageCount = Math.ceil(totalItemsCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pageCount; i++) {
        if (i<10) {
            pages.push(`0${i}`)
        } else {
            pages.push(i)
        }
    }
    let portionCount = Math.ceil( pageCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionNumber = (portionNumber * portionSize);

    return (
        
        <div className={styles.paginator}>
            { portionNumber > 1 && <div onClick={()=> setPortionNumber(portionNumber - 1)} className={styles.paginator_btn}> <img src={prevIcon} alt="prev"/></div> }
            {pages.filter(page => page >= leftPortionNumber && page <= rightPortionNumber).map((page) => {
                return <span 
                onClick={(e) => setCurrentPage(page)} 
                key={page} 
                className= { cn({[ styles.paginator_b]: currentPage === page}, styles.paginator_active)}>
                        {page}
                        </span>
            })
            }
            { portionCount > portionNumber && <div onClick={()=> setPortionNumber(portionNumber + 1)} className={styles.paginator_btn}> <img src={nextIcon} alt="next"/> </div> }
            
        </div>
    )
}
export default Paginator;