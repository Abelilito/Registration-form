export const CustomButton = ({ formik }) => {
  return (
    <>
      <button
        type="submit"
        disabled={!formik.isValid || !formik.dirty}
        className="
          p-[1rem] text-[1rem] rounded-md disabled:bg-[#ede9fe] disabled:border-[#ede9fe] disabled:text-black 
          disabled:cursor-not-allowed font-medium font-sans bg-[#6d28d9] border-[#6d28d9] text-white
        "
      >
        S'inscrire
      </button>
    </>
  );
};
