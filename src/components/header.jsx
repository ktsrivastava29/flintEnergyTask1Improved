import databack from '../video/databack.mp4';

export const Header = (props) => {
  return (

    <header id='header'>

      <div className='intro'>
      <video className='videoTag' autoPlay loop muted>
    <source src={databack} type='video/mp4' />
    </video>
        <div className='overlay'>
  
              <div className='intro-text'>
                <div className="pos">
                <div className="intro2">
                  {props.data ? props.data.title : 'Loading'}
                </div>
                <div className="dataintro">
                <p>{props.data ? props.data.paragraph : 'Loading'}</p></div>
                <a
                  href='#features'
                  className='btn btn-custom btn-lg page-scroll'
                >
                  Learn More
                </a>{' '}
              </div>
              </div>
         
        </div>
       
      </div>
      
    </header>
  )
}
