import ContentLoader from 'react-content-loader';

const Skeleton = () => (
  <div className='container'>
    <ContentLoader
      speed={2}
      max-width={277}
      height={400}
      viewBox="0 0 280 400"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb">
      <rect x="0" y="0" rx="30" ry="30" width="277" height="400" />
    </ContentLoader>
  </div>
);

export default Skeleton;
