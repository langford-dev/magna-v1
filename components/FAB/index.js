const FAB = () => {
    return (
        <button className={styles.fab}>
            <div className="mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" width="18" height="18" viewBox="0 0 24 24"><path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z" /></svg>
            </div>
            <p>Floating button</p>
        </button>
    )
}

const styles = {
    fab: `fab active:scale-90 transition-all cursor-none bg-[#C13341] w-max p-1 px-5 text-[#fff] h-[40px] rounded-[12px] flex items-center justify-center fixed bottom-[30px] right-[30px]`
}

export default FAB