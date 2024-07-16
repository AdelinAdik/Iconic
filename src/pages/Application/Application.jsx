import './Application.css'
import * as React from 'react';
import FormControl, { useFormControl } from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormHelperText from '@mui/material/FormHelperText';



export default function Application() {
    return(
        <>
        <div className="section__applic">
        <div className="container">
            <div className="aplic__blok">
                
        <div className="title__aplic">Записаться на кастинг</div>
        <div className="aplic__text">Заполните анкету и мы свяжемся с Вами перед стартом отбора в вашем городе. Мы открыты для сотрудничества с моделями от 3 до 30 лет! После успешного заполнения анкеты Вы будете переадресованы на наш Телеграмм. Подписывайтесь и задавайте вопросы!</div>
        
        </div>
        
        <div className="input">
        <UseFormControl/>
        </div>
        <a href="">
        <div className="btn">
        <div className="button__aplic">
          
            <button>ОТПРАВИТЬ</button>
            </div>
        </div>
        </a>
        </div>
        </div>
      

        </>
    );
}



function MyFormHelperText() {
  const { focused } = useFormControl() || {};

  const helperText = React.useMemo(() => {
    if (focused) {
      return 'Введите текст';
    }

    return 'Обязательно';
  }, [focused]);

  return <FormHelperText>{helperText}</FormHelperText>;
}

export function UseFormControl() {
  return (
    <form noValidate autoComplete="off">
      <FormControl sx={{ width: '100ch' }}>
        <OutlinedInput placeholder="Укажите страну в которой проживаете" />
        
        <MyFormHelperText />
      </FormControl>
      <FormControl sx={{ width: '100ch' }}>
        <OutlinedInput placeholder="Как вас зовут?" />
        
        <MyFormHelperText />
      </FormControl>
      <FormControl sx={{ width: '100ch' }}>
        <OutlinedInput placeholder="Ваша фамилия" />
        
        <MyFormHelperText />
      </FormControl>
      <FormControl sx={{ width: '100ch' }}>
        <OutlinedInput placeholder="Сколько вам полных лет?" />
        
        <MyFormHelperText />
      </FormControl>
      <FormControl sx={{ width: '100ch' }}>
        <OutlinedInput placeholder="Какой у вас рост?" />
        
        <MyFormHelperText />
      </FormControl>
      <FormControl sx={{ width: '100ch' }}>
        <OutlinedInput placeholder="Телефон " />
        
        <MyFormHelperText />
      </FormControl>
      <FormControl sx={{ width: '100ch' }}>
        <OutlinedInput placeholder="Email " />
        
        <MyFormHelperText />
      </FormControl>
    </form>
    
  );
}



