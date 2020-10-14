import React from "react";
import { IconButton } from "@material-ui/core";
import Delete from '@material-ui/icons/Delete';
import * as classes from './cart.item.styles';
import { PictureInfoVm } from "models/vm";
import { MainContext } from "contexts/main.context";

export interface CartItemProps {
    item: PictureInfoVm,
    readOnly: boolean,
}

export const CartItem: React.FC<CartItemProps> = ({ item, readOnly }) => {
    const { removeItemFromCartById } = React.useContext(MainContext);
    const [itemValue, setItemValue] = React.useState(item);

    const removeItem = () => {
        setItemValue({
            ...itemValue,
            selected: false
        });

        removeItemFromCartById(itemValue.id);
    }

    return (
        <div className={classes.root}>
            <img src={item.picUrl} className={classes.image}></img>
            <span className={classes.title}>{item.title}</span>
            {(!readOnly) ? <IconButton onClick={() => removeItem()} ><Delete fontSize="large" /></IconButton> : <></>}
        </div>
    );
};