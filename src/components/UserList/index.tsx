import { useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import { IRandomUserDTO } from '../../services/domain';
import { API_URL, FIELD_LABELS, } from '../../utils/utils';
import { Container, FilterSortContainer, SortContainer, ErrorLoadingContainer } from './styles';
import Cards from './Cards';

const SORTING_FIELDS = {
  [FIELD_LABELS.FIRST_NAME]: 'name.first',
  [FIELD_LABELS.LAST_NAME]: 'name.last',
  [FIELD_LABELS.GENDER]: 'gender',
  [FIELD_LABELS.AGE]: 'dob.age',
};

const UserList = (): JSX.Element => {
  const [apiData, setApiData] = useState<IRandomUserDTO[]>([]);
  const [data, setData] = useState<IRandomUserDTO[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>('');
  const [isSortAscending, setIsSortAscending] = useState<boolean>(true);
  const [sortingField, setSortingField] = useState<string | undefined>();

  useEffect(() => {
    axios(API_URL).then((response: AxiosResponse) => {
      // API LIMITATION:
      // In order to be able to retrieve information from the database of a selected user, the seed of the previous api call is saved on the session storage.
      // When the user selects a row from the list, the application will get the same users from the api call done before.
      // Afterwords, the application will filter those users and just show the user the selected one (done in UserPage component).
      sessionStorage.setItem('apiSeed', response.data.info.seed);

      setApiData(response.data.results);
      setData(response.data.results);
    }).catch(() => {
      setError(true);
    }).finally(() => setIsLoading(false));
  }, []);

  useEffect(() => {
    let finalData = apiData.filter(element => {
      const searchValueLowerCase: string = searchValue.toLowerCase();
      const fullName: string = (element.name.first.toLowerCase() + ' ' + element.name.last.toLowerCase());

      return (
        element.name.first.toLowerCase().includes(searchValueLowerCase) ||
        element.name.last.toLowerCase().includes(searchValueLowerCase) ||
        fullName.includes(searchValueLowerCase) ||
        element.email.toLowerCase().includes(searchValueLowerCase) ||
        element.location.city.toLowerCase().includes(searchValueLowerCase) ||
        element.location.country.toLowerCase().includes(searchValueLowerCase)
      );
    });

    switch (sortingField) {
      case FIELD_LABELS.FIRST_NAME:
        finalData = finalData.sort((a, b) => (isSortAscending ? (a.name.first > b.name.first ? 1 : -1) : a.name.first < b.name.first ? 1 : -1));
        break;
      case FIELD_LABELS.LAST_NAME:
        finalData = finalData.sort((a, b) => (isSortAscending ? (a.name.last > b.name.last ? 1 : -1) : a.name.last < b.name.last ? 1 : -1));
        break;
      case FIELD_LABELS.GENDER:
        finalData = finalData.sort((a, b) => (isSortAscending ? (a.gender > b.gender ? 1 : -1) : a.gender < b.gender ? 1 : -1));
        break;
      case FIELD_LABELS.AGE:
        finalData = finalData.sort((a, b) => (isSortAscending ? (a.dob.age > b.dob.age ? 1 : -1) : a.dob.age < b.dob.age ? 1 : -1));
        break;
      default:
        break;
    }

    setData(finalData);
  }, [searchValue, sortingField, isSortAscending, apiData]);

  if (isLoading || error) {
    return (
      <ErrorLoadingContainer>
        {isLoading ? <>Loading...</> : <>Error!</>}
      </ErrorLoadingContainer>
    );
  }

  const handleSortingFieldNameChange = (event: any) => {
    setSortingField(event.target.value);
  }

  const handleSortingDirectionChange = () => {
    setIsSortAscending(!isSortAscending);
  }

  return (
    <Container>
      <FilterSortContainer>
        <input
          placeholder='Search by Name, Gender or Age'
          value={searchValue}
          onChange={(event) => setSearchValue(event.target.value)}
        />

        <SortContainer>
          <select
            value={sortingField}
            onChange={handleSortingFieldNameChange}
          >
            <option value={undefined}>
              None
            </option>
            {Object.keys(SORTING_FIELDS).map((key, index) => (
              <option key={index} value={key}>{key}</option>
            ))}
          </select>

          <select
            value={'' + isSortAscending}
            onChange={handleSortingDirectionChange}
            disabled={!sortingField || sortingField === 'None'}
          >
            <option value='true'>Ascending</option>
            <option value='false'>Descending</option>
          </select>
        </SortContainer>
      </FilterSortContainer>

      <Cards data={data} />
    </Container>
  );
};

export default UserList;
