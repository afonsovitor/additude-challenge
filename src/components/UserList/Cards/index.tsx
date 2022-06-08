import { useNavigate } from 'react-router-dom';
import { FaBirthdayCake, FaPhoneAlt, FaMapMarkerAlt, FaTransgender, FaMailBulk } from 'react-icons/fa';
import { IRandomUserDTO } from '../../../services/domain';
import { capitalizeString } from '../../../utils/utils';
import { Container, DetailsContainer, AdditionalDetailsContainer, Details } from './styles';

interface ICards {
  data: IRandomUserDTO[];
};
const Cards = ({ data }: ICards): JSX.Element => {
  const navigate = useNavigate();

  return (
    <Container>
      {data.map((element: IRandomUserDTO, index: number) => (
        <div key={index} onClick={() => navigate(`/contacts/${element.id.value}`)}>
          {element.picture && element.picture.medium && (
            <img src={element.picture.medium} alt='profile' />
          )}
          <DetailsContainer>
            {element.name && element.name.first && element.name.last && (
              <span>{element.name.first} {element.name.last}</span>
            )}

            <AdditionalDetailsContainer>
              <Details>
                <FaTransgender />
                <span>{capitalizeString(element.gender)}</span>
              </Details>

              <Details>
                <FaMailBulk />
                <span>{element.email}</span>
              </Details>

              {element.location && element.location.city && element.location.country && (
                <Details>
                  <FaMapMarkerAlt />
                  <span>{element.location.city}, {element.location.country}</span>
                </Details>
              )}

              {element.dob && element.dob.date && element.dob.age && (
                <Details>
                  <FaBirthdayCake />
                  <span>{new Date(element.dob.date).toDateString()} ({element.dob.age} years)</span>
                </Details>
              )}

              <Details>
                <FaPhoneAlt />
                <span>{element.cell}</span>
              </Details>
            </AdditionalDetailsContainer>
          </DetailsContainer>
        </div>
      ))}
    </Container>
  );
};

export default Cards;
