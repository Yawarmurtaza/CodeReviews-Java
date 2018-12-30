import static java.lang.System.exit;
import java.util.Scanner;


public class Task1_4 {
   
    	public static void main(String args[]) 
	{ 
	
        Scanner input= new Scanner(System.in); //creating object for input
       
        int count=0; // varibale for checking 
        
      // analyzing first name
        System.out.println("Enter first name = ");
        
        String name1=  "mississippi"; //input.nextLine(); // getting string input
        
        char Arr1[]=name1.toCharArray();
       
        
        //analyzing second name 
        System.out.println("Enter first name = ");
     
        String name2= "pssmiissiip" //input.nextLine();
        
        char[] Arr2=name2.toCharArray();
        
		// Note: Edge cases...
		// if any string is empty then we can just return false.
		// if both strings are the same then we can just return true - no need to go through the code.
		// 
       
        if(Arr1.length!=Arr2.length){ // if names have different numbers of charachter's 
         
            System.out.println("Above names are not permutation's of each other !");
            exit(0);
			// Note: we can return from here and do not need else block...
        }
        else{ //now if number  of charcter's are same then lets check their permutation
 

        	// using merge sort, sorting both names according to input type which will help us to do comparision easier.

           // Note: we can write an overload of sort method that will take just an array, this overload 
		   // will intern call the real sort method by passing in the start and end indices.
		   sort(Arr1, 0, Arr1.length-1);  
           sort(Arr2, 0, Arr2.length-1);
           int j=0;
           for(int i=0;i<Arr1.length;i++){
            
			// Note: I would check if any value (character) is not same then return false right away...
                        
              if(Arr1[i]==Arr2[j]){ // checking if both sorted names are same or not 
                  
                  count++;        // counting number matched elements/charcters
                  j++;
            
              }
            
            }
        
            if(count==Arr1.length) // if number of matching charcters are same in name one or name two then both are permutation of each other.
            System.out.println("yes above names are permutations of each other");
            
            else //  // if number of matching charcters are not same in name one or name two then they are not permutaions of each other.
            System.out.println("Above names are not permutation's of each other !");
       
           
	} 

        }
 
        
	// Merges two subarrays of Arr[]. 
	// First subarray is Arr[l..m] 
	// Second subarray is Arr[m+1..r] 
  static void merge(char arr[], int l, int m, int r) 
	{ 
		// Find sizes of two subarrays to be merged 
		int n1 = m - l + 1; 
		int n2 = r - m; 

		/* Create temp arrays */
		char L[] = new char [n1]; 
		char R[] = new char [n2]; 

		// Note: you just need 1 new array with length of n1 & n2 
		// this new array will be having sorted values that you can return from this method.
		
		/*Copy data to temp arrays*/
		for (int i=0; i<n1; ++i) 
			L[i] = arr[l + i]; 
		for (int j=0; j<n2; ++j) 
			R[j] = arr[m + 1+ j]; 


		/* Merge the temp arrays */

		// Initial indexes of first and second subarrays 
		int i = 0, j = 0; 

		// Initial index of merged subarry array 
		int k = l; 
		while (i < n1 && j < n2) 
		{ 
			if (L[i] <= R[j]) 
			{ 
				arr[k] = L[i]; 
				i++; 
			} 
			else
			{ 
				arr[k] = R[j]; 
				j++; 
			} 
			k++; 
		} 

		/* Copy remaining elements of L[] if any */
		while (i < n1) 
		{ 
			arr[k] = L[i]; // Note: ++k, ++j may improve code readability...
			i++; 
			k++; 
		} 

		/* Copy remaining elements of R[] if any */
		while (j < n2) 
		{ 
			arr[k] = R[j]; // Note: ++k, ++j may improve code readability...
			j++; 
			k++; 
		} 
        }

	// Main function that sorts arr[l..r] using 
	// merge() 
	static void sort(char arr[], int l, int r) 
	{ 
		if (l < r) 
		{ 
			// Find the middle point

					
			int m = (l+r)/2; 

			// Sort first and second halves 
			sort(arr, l, m);  // left half
			sort(arr , m+1, r); // right half

			// Merge the sorted halves 
			merge(arr, l, m, r); 
		} 
	} 


}
