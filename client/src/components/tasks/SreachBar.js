import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import style from './css/Tasks.module.css';
import { InputAdornment, TextField } from '@mui/material';

export default function SearchBar({ search, setSearch }) {
    return (
        <div className={style.searchBar}>
            <TextField
                color="primary"
                id="outlined-basic"
                label="Search"
                variant="outlined"
                sx={{
                    width: '100%',
                    marginRight: '10px'
                }}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            {search.length === 0 ? (
                                <IconButton
                                    type="submit"
                                    sx={{ p: '10px' }}
                                    aria-label="search"
                                >
                                    <SearchIcon color="secondary" />
                                </IconButton>
                            ) : (
                                <IconButton
                                    sx={{ p: '10px' }}
                                    aria-label="cancel"
                                    onClick={() => setSearch('')}
                                >
                                    <CloseIcon color="secondary" />
                                </IconButton>
                            )}
                        </InputAdornment>
                    )
                }}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
        </div>
    );
}
