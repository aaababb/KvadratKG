import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import upload from '../../../shared/assets/svg/upload.svg';
import { postHeadings } from './store/action';
import { selectIsLoading, selectError } from './store/selectors';

const Slide1 = ({ mobileOpen }) => {
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState('');
  const [submittedTitle, setSubmittedTitle] = useState('');
  const [submittedImage, setSubmittedImage] = useState(null);
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const handleSubmit = async () => {
    if (title.trim() === '') {
      alert('Title is required');
      return;
    }

    const formData = new FormData();
    formData.append('title', title);
    if (image) {
      formData.append('image', image);
    }

    const resultAction = await dispatch(postHeadings(formData));
    if (postHeadings.fulfilled.match(resultAction)) {
      console.log('POST request successful:', resultAction.payload);
      setSubmittedTitle(title);
      setSubmittedImage(URL.createObjectURL(image));
      setTitle('');
      setImage(null);
    } else {
      console.log('POST request failed:', resultAction.payload);
    }
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  return (
    <div className={`h-[725px] p-9 bg-[#222224] text-white ml-[5%] transition-all duration-300 ${mobileOpen ? 'w-[90%]' : 'w-[90%]'}`}>
      <div className={`h-[244px] border-b border-gray-500 w-[99%] flex justify-between`}>
        <div className='w-[354px] h-[109px]'>
          <h2 className='text-[28px] font-semibold'>{submittedTitle || 'Заголовок'}</h2>
        </div>
        <div className='w-[356px] h-[207px] bg-[#131313] flex justify-center items-center'>
          {submittedImage ? (
            <img src={submittedImage} alt="Uploaded" className='object-contain h-full' />
          ) : (
            <img src={upload} alt="Upload" />
          )}
        </div>
      </div>
      <div className='mt-[63px]'>
        <h2 className='text-[28px] font-semibold mb-[25px]'>Дабавить обзор активности</h2>
        <div className={`flex justify-between`}>
          <div className='flex flex-col gap-[37px]'>
            <div className='flex flex-col gap-[11px]'>
              <input
                className='w-[363px] h-[66px] bg-[#131313] text-[#B3B3B3] rounded-[5px] p-3'
                placeholder='Дабавить заголовок ... '
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className='w-[326px] h-[56px] bg-[#C8180C] rounded-[47px] flex justify-center items-center'>
              <button className='text-[18px] font-semibold' onClick={handleSubmit} disabled={isLoading}>
                {isLoading ? 'Загрузка...' : 'Сохранить и опубликовать'}
              </button>
            </div>
          </div>
          <div className='w-[374px] h-[176px] bg-[#131313] pt-[34px] pl-[25px] flex flex-col gap-[17px]'>
            <div className='w-[284px] h-[46px] bg-[#C8180C] rounded-[28px] flex justify-center items-center'>
              <button className='text-[18px] font-semibold'>
                <label htmlFor="image-upload" className="cursor-pointer">
                  Загрузите изображение
                </label>
                <input
                  id="image-upload"
                  type="file"
                  className="hidden"
                  onChange={handleImageChange}
                />
              </button>
            </div>
            <p className='text-[15px] font-semibold'>Допустимые форматы: PNG, GIF, WEBP, MP3, and MP4</p>
          </div>
        </div>
      </div>
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </div>
  );
};

export default Slide1;
