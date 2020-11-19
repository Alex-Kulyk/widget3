import axios from 'axios';
import { useQuery } from 'react-query';

export default function useQueryAplicationData() {
  return useQuery('fetchingFonts', () =>
    axios
      .all([
        axios.get('http://json.ffwagency.md/tabs'),
        axios.get('http://json.ffwagency.md/fonts_a'),
        axios.get('http://json.ffwagency.md/fonts_b'),
      ])
      .then((resp) => resp)
  );
}
