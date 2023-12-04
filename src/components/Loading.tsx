import { useMemo, useCallback, useEffect } from 'react';
import { NextUIProvider, Spinner } from "@nextui-org/react";
import { useStore } from '@nanostores/react';
import { $loadingState } from '../store/loading';


/**
 * Home page
 * @returns 
 */
export default function Loading() {
    const isLoading = useStore($loadingState);

    return (<NextUIProvider>
        {
            isLoading ? <div className="loading-bg w-full h-full fixed bg-gray-800 z-50 flex justify-center items-center">
                <Spinner color="default" />
            </div> : null
        }

    </NextUIProvider>)
}