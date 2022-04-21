import styled from 'styled-components';

import loading_gif from '../../assets/gifs/loading.gif';

export const Container = styled.div`
  button {
    opacity: 0.6;
    transition: 0.3s;
  }

  button:hover {
    opacity: 1;
  }
`;

export function Button(props) {
  return (
    <Container>
      <button
        type="button"
        className={`btn btn-${props.color} btn-lg`}
        {...props}
      >
        {!props.loadingButton && props.name}
        {props.loadingButton && (
          <img src={loading_gif} width={20} height={20} />
        )}
      </button>
    </Container>
  );
}
