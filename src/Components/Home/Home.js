import React from 'react'
import './Home.css'
import google from '../../images/google scholar.png'
import logoart from '../../images/logoart.png'
import { AiOutlineSearch } from 'react-icons/ai'
import { AiOutlineUser } from 'react-icons/ai'
import { MdEmail } from 'react-icons/md'
import { FiSettings } from 'react-icons/fi'
import { MdOutlineFormatQuote } from 'react-icons/md'
import { RiBarChartBoxFill } from 'react-icons/ri'
import { GrSearchAdvanced } from 'react-icons/gr'
import { AiOutlineStar } from 'react-icons/ai'
import profile from '../../images/profile.png'
import star from '../../images/star.png'
import Matrics from '../../images/matrics.png'

const Home = () => {
  return (
    <div>
      <div className='navbar h-10 bg-accent'>
        <div className='flex-none'>
          <div className='dropdown'>
            <label tabIndex={0} className='btn btn-square btn-ghost '>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='inline-block w-10 h-8 mt-[-5px] stroke-current'
                fill='none'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h16M4 18h16'
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className='menu menu-compact dropdown-content mt-[-55px] p-2 shadow bg-base-100  w-64 h-screen '
            >
              <span className='dropdown'>
                <button className=' inline btn btn-square btn-ghost  '>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    className=' inline w-10 h-8 mt-[-25px] stroke-current'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M4 6h16M4 12h16M4 18h16'
                    ></path>
                  </svg>
                </button>
              </span>
              <div>
                <span>
                  <img
                    className='h-16 w-42 ml-10 mt-[-60px] mr-10'
                    src={google}
                    alt=''
                  />
                </span>
              </div>

              <hr className='h-2 w-full' />

              <div tabIndex={1} className='mt-4 ml-10 '>
                <li>
                  <a>Articles</a>
                </li>

                <li>
                  <a>Case law</a>
                </li>
                <li>
                  <a>Profile</a>
                </li>
              </div>
              <hr className='h-2 w-full' />
              <li>
                <span className=''>
                  <img className='inline' src={profile} alt='' />
                  My profile
                </span>
              </li>
              <li>
                <span>
                  {' '}
                  <img className='inline' src={star} alt='' /> My library
                </span>
              </li>
              <li>
                <span>
                  {' '}
                  <MdEmail className='inline  opacity-75 h-5 w-10' />
                  Alerts
                </span>
              </li>
              <li>
                <span>
                  {' '}
                  <RiBarChartBoxFill className='inline  opacity-75 h-5 w-10' />{' '}
                  matrices
                </span>
              </li>
              <hr className='h-2 w-full' />
              <li>
                <span>
                  {' '}
                  <GrSearchAdvanced className='inline  opacity-75 h-5 w-10' />{' '}
                  Advance search
                </span>
              </li>
              <hr className='h-2 w-full' />
              <li>
                <span>
                  {' '}
                  <FiSettings className='inline  opacity-75 h-5 w-10' />
                  Settings
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className='flex-1'>
          <a className=''>
            <span>
              <img className='h-16 w-42 ml-[-5px] mr-10' src={google} alt='' />
            </span>
          </a>
          <input
            type='text'
            placeholder='Search'
            className='border-2 border-fuchsia-50 p-5 w-4/12 h-5'
          />
          <button className='w-12 h-11 bg-neutral'>
            <AiOutlineSearch className='w-8 h-7 text-white ml-2 ' />
          </button>
          <div className=' ml-96 pl-64 h-10 w-32 rounded-full '>
            <div className=' '>
              <AiOutlineUser className='h-10 w-10 rounded-full  bg-white' />
            </div>
          </div>
        </div>
        <div className='flex justify-start'></div>
      </div>
      <div className='flex '>
        <div>
          <img className='mt-5 ml-3 mr-5' src={logoart} alt='' />
        </div>
        <div className='mt-4 '>
          <span className='text-xl ml-[-15px]'>Articles</span>{' '}
          <span className='ml-40'>About 2,740,000 results (0.06 sec)</span>
          <span>
            <span className='ml-96 pl-72 mr-5'>
              <img className='inline' src={profile} alt='' /> My profile
            </span>
          </span>
          <span>
            <span>
              {' '}
              <img className='inline' src={star} alt='' /> My library
            </span>
          </span>
        </div>
      </div>
      <div>
        <hr className='h-2 w-full mt-2' />
      </div>
      <div className='main-page flex'>
        <div className='left w-40% ml-12'>
          <h2 className='mt-5'>Any time</h2>
          <h1 className=''>Since 2022</h1>
          <h1 className=''>Since 2021</h1>
          <h1 className=''>Since 2018</h1>
          <h1 className=''>Custom range...</h1>
          <br />
          <h2>Sort by relevance</h2>
          <h1>Sort by date</h1>
          <br />
          <h2>Any type</h2>
          <h1>Review articles</h1>
          <br />
          <input type='checkbox' id='vehicle1' name='vehicle1' value='Bike' />
          <label for='vehicle1'> include patents</label>
          <br />
          <input type='checkbox' id='vehicle2' name='vehicle2' value='Car' />
          <label for='vehicle2'> include citations</label>
          <br />
          <br />
          <span>
            <MdEmail className='inline mr-2 opacity-75' />
          </span>{' '}
          <span> Create alert</span>
        </div>
        <div className='right ml-24 w-60%'>
          <h1 className='text-primary font-bold text-xl hover:underline cursor-pointer mt-5'>
            Computed tomography
          </h1>
          <span className='text-secondary'>
            <span className='underline'>TM Buzug</span> - Springer handbook of
            medical technology, 2011 - Springer
          </span>
          <p>
            In this chapter, historical milestones of{' '}
            <span className='font-bold'>computed tomography</span> (CT) (Sect.
            16.2), recent <br /> technology with a focus on generation and
            detection of x-rays (Sect. 16.3), as well as image …
          </p>
          <p className='text-primary opacity-89 mt-[-8px]'>
            <span className=''>
              <AiOutlineStar className='inline mr-1  ' />
            </span>
            <span className='mr-2 hover:underline cursor-pointer'>Save</span>
            <span className='ml-2 mr-1'>
              <MdOutlineFormatQuote className='inline opacity-75  h-12 w-5' />
            </span>
            <span className='mr-5 hover:underline cursor-pointer'>Cite</span>
            <span>
              <span className='mr-5 hover:underline cursor-pointer'>
                {' '}
                Cited by 1426
              </span>{' '}
              <span className='mr-5 hover:underline cursor-pointer'>
                Related articles
              </span>{' '}
              <span className='hover:underline cursor-pointer'>
                All 9 versions
              </span>
            </span>
          </p>

          <h1 className='text-primary font-bold text-xl hover:underline cursor-pointer'>
            Computed tomography
          </h1>
          <span className='text-secondary'>
            SL Brooks - Dental Clinics of North America, 1993 - Elsevier
          </span>
          <p>
            Although CT scanning has been available for less than 20 years, it
            has made a major impact <br /> on the practice of dentistry,
            particularly in oral and maxillofacial surgery, in the diagnosis …
          </p>
          <p className='text-primary opacity-89 mt-[-8px]'>
            <span className=''>
              <AiOutlineStar className='inline mr-1  ' />
            </span>
            <span className='mr-2 hover:underline cursor-pointer'>Save</span>
            <span className='ml-2 mr-1'>
              <MdOutlineFormatQuote className='inline opacity-75  h-12 w-5' />
            </span>
            <span className='mr-5 hover:underline cursor-pointer'>Cite</span>
            <span>
              <span className='mr-5 hover:underline cursor-pointer'>
                {' '}
                Cited by 85
              </span>{' '}
              <span className='mr-5 hover:underline cursor-pointer'>
                Related articles
              </span>{' '}
              <span className='cursor-pointer hover:underline'>
                All 4 versions
              </span>
            </span>
          </p>

          <h1 className='text-primary font-bold text-xl hover:underline cursor-pointer'>
            <small>[HTML]</small> Computed tomography—old ideas and new
            technology <small className='ml-52  '>[HTML] springer.com</small>
          </h1>
          <span className='text-secondary'>
            <span className='underline'>D Fleischmann,</span>
            <span className='underline'> FE Boas </span>- European radiology,
            2011 - Springer
          </span>
          <p>
            … new’ techniques in{' '}
            <span className='font-bold'>computed tomography</span> —iterative
            reconstruction, … Computed tomography <br /> (CT) was publicly
            announced in … appraisal of{' '}
            <span className='font-bold'>computed tomography</span> in the
            imaging literature. …
          </p>
          <p className='text-primary opacity-89 mt-[-8px]'>
            <span className=''>
              <AiOutlineStar className='inline mr-1  ' />
            </span>
            <span className='mr-2 hover:underline cursor-pointer'>Save</span>
            <span className='ml-2 mr-1'>
              <MdOutlineFormatQuote className='inline opacity-75  h-12 w-5' />
            </span>
            <span className='mr-5 hover:underline cursor-pointer'>Cite</span>
            <span>
              <span className='mr-5 hover:underline cursor-pointer'>
                {' '}
                Cited by 330
              </span>{' '}
              <span className='mr-5 hover:underline cursor-pointer'>
                Related articles
              </span>{' '}
              <span className='hover:underline cursor-pointer'>
                All 11 versions
              </span>
            </span>
          </p>

          {/* 4th// */}
          <h1 className='text-primary font-bold text-xl hover:underline cursor-pointer'>
            <small>[PDF]</small> Is computed tomography safe{' '}
            <small className='ml-96 pl-20'>[PDF] timg.co.il</small>
          </h1>
          <span className='text-secondary'>
            <span className='underline'>R Smith-Bindman </span> - - N Engl j
            Med, 2010 - img2.timg.co.il
          </span>
          <p>
            … methods such as{' '}
            <span className='font-bold'>computed tomography</span> (CT),
            magnetic resonance imaging (MRI), and <br /> positron-emission{' '}
            <span className='font-bold'>tomography</span> (PET) has made
            diagnosis more accurate and less invasive for …
          </p>
          <p className='text-primary opacity-89 mt-[-8px]'>
            <span className=''>
              <AiOutlineStar className='inline mr-1  ' />
            </span>
            <span className='mr-2 hover:underline cursor-pointer'>Save</span>
            <span className='ml-2 mr-1'>
              <MdOutlineFormatQuote className='inline opacity-75  h-12 w-5' />
            </span>
            <span className='mr-5 hover:underline cursor-pointer'>Cite</span>
            <span>
              <span className='mr-5 hover:underline cursor-pointer'>
                {' '}
                Cited by 346
              </span>{' '}
              <span className='mr-5 hover:underline cursor-pointer'>
                Related articles
              </span>{' '}
              <span className='hover:underline cursor-pointer'>
                All 9 versions
              </span>
            </span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Home
