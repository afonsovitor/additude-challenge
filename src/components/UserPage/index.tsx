import { useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import { Link, useParams } from 'react-router-dom';
import { IRandomUserDTO } from '../../services/domain';
import { API_URL, FIELD_LABELS } from '../../utils/utils';
import { Container, CardContainer, CardHeader, CardHeaderPhotoName, CardBody, Additional } from './styles';

type UserType = IRandomUserDTO | undefined;

const UserPage = (): JSX.Element => {
  let { id } = useParams();

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const [userData, setUserData] = useState<UserType>();

  useEffect(() => {
    const seed = sessionStorage.getItem('apiSeed');

    axios(API_URL + '&seed=' + seed)
      .then((response: AxiosResponse) => {
        sessionStorage.setItem('apiSeed', response.data.info.seed);
        const users: IRandomUserDTO[] = response.data.results;

        setUserData(users.filter(user => (user.id.value && user.id.value === id))[0]);
      }).catch(() => {
        setError(true);
      }).finally(() => setIsLoading(false));
  }, [id]);

  let additionalElement = <></>;
  const shouldShowUsers = userData && !(isLoading && !userData && error);

  if (isLoading) {
    additionalElement = <>Loading...</>;
  }
  else if (!userData) {
    additionalElement = <>Not found! Click <Link to='/contacts'>here</Link> to go to user list.</>;
  }
  else if (error) {
    additionalElement = <>User was not possible to be retrieved!</>;
  }

  let additionalElementContainer = (<Additional>{additionalElement}</Additional>);

  return (
    <Container>
      {!shouldShowUsers ? additionalElementContainer : (
        <>
          <CardContainer>
            <CardHeader>
              <Link to='/contacts'>Go Back</Link>
              <CardHeaderPhotoName>
                <img src={userData.picture.large} alt='profile' />
                <span>{userData.name.first} {userData.name.last}</span>
              </CardHeaderPhotoName>
            </CardHeader>

            <CardBody>
              <span>{FIELD_LABELS.GENDER}</span>
              <span>{userData.gender[0].toUpperCase() + userData.gender.slice(1)}</span>

              <span>{FIELD_LABELS.EMAIL}</span>
              <span>{userData.email}</span>

              <span>{FIELD_LABELS.AGE}</span>
              <span>{userData.dob.age}</span>

              <span>{FIELD_LABELS.ADDRESS}</span>
              <span>{userData.location.street.name}, {userData.location.street.number} {userData.location.city}</span>

              <span>{FIELD_LABELS.CITY}</span>
              <span>{userData.location.city}</span>

              <span>{FIELD_LABELS.COUNTRY}</span>
              <span>{userData.location.country}</span>
            </CardBody>
          </CardContainer>
        </>
      )}
    </Container>
  );
};

export default UserPage;
