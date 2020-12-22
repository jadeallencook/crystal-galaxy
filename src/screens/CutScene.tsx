import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import levels from '../levels';
import './CutScene.css';

const CutScene: React.FC<any> = () => {
  let { id } = useParams<{ id: string }>();
  const { scenes, next } = levels[id];
  const length = scenes.length - 1;
  const [index, setIndex] = useState(0);
  const [scene, setScene] = useState(scenes[index]);

  const nextScene = () => {
    const num = index + 1;
    setIndex(num);
    setScene(scenes[num]);
  };

  return (
    <div className='CutScene'>
      {scene.image && (
        <img className='flying' src={scene.image} alt='game image' />
      )}
      <div className='text-center mt-5 text-center w-full'>
        <p className='text-white text-center mb-4'>{scene.text || scene.dialog}</p>
        <Link to={next} className='bg-blue-400 px-4 mr-5 py-1 leading-none'>
          Skip
        </Link>
        {index === length ? (
          <Link
            to={next}
            className='bg-white px-4 py-1 inline-block leading-none cursor-pointer'
          >
            Continue
          </Link>
        ) : (
          <div
            className='bg-white px-4 py-1 inline-block leading-none cursor-pointer'
            onClick={nextScene}
          >
            Continue
          </div>
        )}
      </div>
    </div>
  );
};

export default CutScene;
