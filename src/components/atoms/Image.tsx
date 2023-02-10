
interface ImageProps {
  url: string;
  widht?: string;
  height?: string;
}

export const Image = ({ url, widht, height }: ImageProps) => {
 
    return (
      <img
        src={url}
        width={widht}
        height={height}
      />
    );
  
};
