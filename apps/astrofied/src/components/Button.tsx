import { Button as BtnPkg } from '@rs/button';
import '@rs/button/styles.css';

export default function Button() {
  return (
    <div className='space-y-4'>
      <p className='text-sm text-gray-600'>Button from Packages</p>
      <BtnPkg />
    </div>
  );
}
