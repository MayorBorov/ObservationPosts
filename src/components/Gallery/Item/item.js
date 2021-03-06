import classnames from 'classnames';
import PropTypes from 'prop-types';
import useGlobal from '../../../hooks/store';

const Item = (props) => {
    const { source, index } = props;
    const [store, actions] = useGlobal();
    const handleClick = () => {
        actions.setSelectedImage(index);
        actions.setSelectedSource(source);
    };
    return (
        <div
            className='itemContainer'
        >
            <div
                role='presentation'
                className={classnames('imageContainer', { selected: store.selectedImage === index })}
                onClick={handleClick}
            >
                <img
                    index={index}
                    src={source}
                    alt='eror'
                    className='Img'
                />
            </div>
        </div>
    );
};

Item.propTypes = {
    source: PropTypes.string,
    index: PropTypes.number,
};

Item.defaultProps = {
    source: '',
    index: 1,
};


export default Item;
