import { memo } from 'react';
function Loading (){console.log("loading..");
    return (
        <>
        <div className='spinner-grow'>
            <span className='visually-hidden'>Loading...</span>
        </div>
        </>
    );
}
export default memo(Loading) ;