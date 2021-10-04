import { useCallback, useEffect, useState } from "react";

import type { NextPage } from "next";
import styles from "../styles/ObserverPage.module.css";

/* 
    observer를 이용한 console.log()관찰하기, 
    click 이벤트를 이용한 section화면 추가 기능
*/
const ObserverPage: NextPage = () => {
    const [list, setList] = useState(['1', '2', '3', '4'])
    let count = 0
    useEffect(() => {
        const sections = document.getElementsByTagName('section');
        count = sections.length;
        const observer = new IntersectionObserver(handleObserver, options);
        if (sections) {
            Array.from(sections).forEach(e => {
                observer.observe(e)
            })
            observer.observe(sections[1]);
        }
        return () => observer.disconnect();
    }, [list]);

    const handleObserver = useCallback(async (entries) => {
        const entriesT = entries[0];
        if (entriesT.isIntersecting) {
            console.log(entriesT.target.innerHTML)
            // console.log("is InterSecting"); 
        }
        if (entriesT.intersectionRatio > 0) {
            // console.log("intersectionRatio"); 
        }
    }, []);
    const options = {
        root: null,  //기본 null, 관찰대상의 부모요소를 지정 
        rootMargin: "20px", // 관찰하는 뷰포트의 마진 지정 
        threshold: 1.0, // 관찰요소와 얼만큼 겹쳤을 때 콜백을 수행하도록 지정하는 요소 
    };

    const addClick = useCallback(
        () => {
            count++;
            setList([...list, String(count)])
        },
        [list],
    )


    return (
        <>
            <button onClick={addClick} className={styles.add_button__fixed}>ADD</button>
            {list.map((e, index) => {
                return (
                    <section key={index} className={styles.container_section}>
                        {e}
                    </section>
                );

            })}
        </>
    )
}

export default ObserverPage
