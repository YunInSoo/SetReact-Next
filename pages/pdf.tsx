import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';
import { useEffect, useState } from 'react';
import { MakePDF } from '../components/PDFContainer';
import * as htmlToImage from 'html-to-image';

function Home() {
  const [isClient, setIsClient] = useState(false);
  const [img, setImg] = useState('');

  useEffect(() => {});
  const handlePDFClick = () => {
    async function temp() {
      const topElement: HTMLElement = document.getElementById('capture')!;
      topElement.style.display = 'block';
      const topElementImg = await htmlToImage.toPng(topElement);
      setImg(topElementImg);
      setIsClient(true);
      topElement.style.display = 'none';
    }
    temp();
  };
  return (
    <div style={{ height: '100vh' }}>
      <p>PDF + Canvas </p>
      <p>html을 이미지형태로 변경을 하여 pdf에 넣어줍니다.</p>
      <div onClick={handlePDFClick}>Click!!</div>
      <p style={{ display: 'none' }} id="capture">
        HOla
      </p>
      {isClient && (
        <>
          <PDFDownloadLink document={<MakePDF topElementImg={img} />}>
            {({ loading }) =>
              loading ? 'Loading document...' : 'Download File'
            }
          </PDFDownloadLink>
          <div style={{ height: '100vh' }}>
            <PDFViewer width={'50%'} height={'80%'}>
              <MakePDF topElementImg={img} />
            </PDFViewer>
          </div>
        </>
      )}
    </div>
  );
}

export default Home;
