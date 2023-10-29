import { useSearchParams } from 'react-router-dom';
import CustomButton from '../CustomButton';

type ShowMoreProps = {
  limit: number;
  isNext: boolean;
};

const ShowMore = ({ limit, isNext }: ShowMoreProps) => {
  const [params, setParams] = useSearchParams();

  // urldeki limit prametresine 5 ekler
  const handleNavigate = () => {
    // yeni limit hesapla
    const newLimit: number = limit + 5;

    // diğer parametrelie islmeden yenisini ekle
    params.set('limit', String(newLimit));

    // url güncelle
    setParams(params);
  };
  return (
    <div className="w-full flex-center gap-5 my-10">
      {isNext && (
        <CustomButton
          title="Daha Fazla"
          handleClick={handleNavigate}
        />
      )}
    </div>
  );
};

export default ShowMore;
