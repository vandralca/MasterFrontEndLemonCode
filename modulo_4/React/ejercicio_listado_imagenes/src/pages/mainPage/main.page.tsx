import React from "react";
import { ImageGallery } from "scenes/imageGallery/image.gallery.scene";
import { ShoppingCart } from "scenes/shoppingCart/shopping.cart.scene";
import { SplitScreenLayout } from "layouts/splitScreenLayout"
import { PictureInfoVm } from "models/vm";
import { mapPictureInfoModelToPictureInfoVm } from "models/vm/mapper";
import { getKittiesImages, getPuppiesImages } from "api/image.provider";
import { AppContext } from "contexts/app.context";
import { MainContextProvider } from "contexts/main.context";
import { PictureInfoModel } from "models/dto";

export const MainPage: React.FC = () => {
    const { cartElements, setCartElements } = React.useContext(AppContext);
    const [galleryImagesCollection, setGalleryImagesCollection] = React.useState<PictureInfoVm[]>([]);
    const [animalFamily, setAnimalFamily] = React.useState<string>("");

    React.useEffect(() => {
        if (!animalFamily || animalFamily == "kitties") {
            getKittiesImages().then((imagesFromApi) => {
                return setGalleryImagesCollection(mergeGalleryWithCart(imagesFromApi, cartElements));
            })
        }
        else if (animalFamily == "puppies") {
            getPuppiesImages().then((imagesFromApi) => {
                return setGalleryImagesCollection(mergeGalleryWithCart(imagesFromApi, cartElements));
            })
        }
        else {
            setGalleryImagesCollection([]);
        }
    }, [animalFamily]);

    const mergeGalleryWithCart = (gallery: PictureInfoModel[], cart: PictureInfoVm[]) => {
        const galleryCollectionVm = gallery.map(result => mapPictureInfoModelToPictureInfoVm(result))
        const galleryCollectionVmNotMatchingCart = galleryCollectionVm.filter(gvm => !cart.some(c => c.id == gvm.id));
        const galleryCollectionVmMatchingCart = galleryCollectionVm.filter(gvm => cart.some(c => c.id == gvm.id)).map(galleryImageVm => {
            return {
                ...galleryImageVm,
                selected: true
            };
        });

        return [...galleryCollectionVmNotMatchingCart, ...galleryCollectionVmMatchingCart].sort((c1, c2) => c1.id.localeCompare(c2.id));
    }

    const setGalleryAndCartCollections = (cartElementIds: string[]) => {
        const currentCartElements = cartElements.filter(c => cartElementIds.some(id => c.id == id));
        const newCartElements = galleryImagesCollection.filter(c => cartElementIds.some(id => c.id == id && !currentCartElements.some(cu => cu.id == c.id)));
        const updatedCartsCollection = [...currentCartElements, ...newCartElements];

        setCartElements(updatedCartsCollection);
        setGalleryImagesCollection(mergeGalleryWithCart(galleryImagesCollection, updatedCartsCollection));
    }

    const addItemToCartById = (imageId: string) => {
        if (imageId == null) return;

        const cartElementsButItem = cartElements.filter(c => c.id != imageId).map(c => c.id);

        setGalleryAndCartCollections([...cartElementsButItem, imageId]);
    }

    const removeItemFromCartById = (imageId: string) => {
        if (imageId == null) return;

        const cartElementsButItem = cartElements.filter(c => c.id != imageId).map(c => c.id);

        setGalleryAndCartCollections(cartElementsButItem);
    }

    const clearCart = () => {
        setGalleryAndCartCollections([]);
    }

    return (
        <MainContextProvider animalFamily={animalFamily}
            setAnimalFamily={setAnimalFamily}
            galleryElements={galleryImagesCollection}
            cartElements={cartElements}
            addItemToCartById={addItemToCartById}
            removeItemFromCartById={removeItemFromCartById}
            clearCart={clearCart}>
            <SplitScreenLayout>
                <ImageGallery />
                <ShoppingCart />
            </SplitScreenLayout>
        </MainContextProvider>
    );
};