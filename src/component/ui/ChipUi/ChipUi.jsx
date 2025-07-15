import {Chip} from "@mui/material";

const ChipUi = ({label, styles}) => {
    return (
        <>
            <Chip label={label} sx={styles} />
        </>
    )
}

export default ChipUi