import React, { useRef, useState } from "react";
import { useInView } from 'react-intersection-observer';

const getToggleSection = () => import('./ToggleSection');
const getRecursive = () => import('./Recursive');
const getDynamicProps = () => import("./DynamicProps");

export default () => {
  const ref = useRef();
  const inView = useInView(ref);
  const [dynamicComponents, setDynamicComponents] = useState([]);

  if (inView && !dynamicComponents.length) {
    Promise.all([getToggleSection(), getRecursive(), getDynamicProps()])
      .then(([ToggleSectionComponent, RecursiveComponent, DynamicPropsComponent]) => {
        setDynamicComponents([
          ToggleSectionComponent.default,
          RecursiveComponent.default,
          DynamicPropsComponent.default
        ]);
      });
  }

  const isReady = dynamicComponents.length;
  const [ToggleSection, Recursive, DynamicProps] =  dynamicComponents;
  return (
    <div ref={ref}>
      {
        (inView && isReady) ? (
          <>
            <p>
              <DynamicProps onClick={e => alert(e.target.innerText)}>
                It works {Math.random() < 0.5 ? "great" : "nice"}!
              </DynamicProps>
            </p>
            <p>
              <ToggleSection />
            </p>
            <p>
              <Recursive />
            </p>
          </>
        ) : (<h1>Loading...</h1>)
      }
		</div>
  );
}