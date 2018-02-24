package in.c2n.portal.entities;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "students_by_referrer")
@JsonIgnoreProperties(ignoreUnknown = true)
public class StudentsByReferrer implements java.io.Serializable {

	private static final long serialVersionUID = 2237641995594776139L;

	private int id;
	private String firstName;
	private String lastName;
	private String emailId;
	private String mobileNo;
	private byte isLead;
	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")
	private Date doj;
	private int referredBy;
	private String referrerName;

	@Id
	@Column(name = "id", nullable = false)
	public int getId() {
		return this.id;
	}

	public void setId(int id) {
		this.id = id;
	}

	@Column(name = "first_name", nullable = false)
	public String getFirstName() {
		return this.firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	@Column(name = "last_name", nullable = false)
	public String getLastName() {
		return this.lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	@Column(name = "email_id", nullable = false)
	public String getEmailId() {
		return this.emailId;
	}

	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}

	@Column(name = "mobile_no", nullable = false)
	public String getMobileNo() {
		return this.mobileNo;
	}

	public void setMobileNo(String mobileNo) {
		this.mobileNo = mobileNo;
	}

	@Column(name = "IsLead", nullable = false)
	public byte getIsLead() {
		return this.isLead;
	}

	public void setIsLead(byte isLead) {
		this.isLead = isLead;
	}

	@Column(name = "doj", nullable = false, length = 10)
	public Date getDoj() {
		return this.doj;
	}

	public void setDoj(Date doj) {
		this.doj = doj;
	}

	@Column(name = "referredBy", nullable = false)
	public int getReferredBy() {
		return this.referredBy;
	}

	public void setReferredBy(int referredBy) {
		this.referredBy = referredBy;
	}

	@Column(name = "referrer_name", nullable = false)
	public String getReferrerName() {
		return this.referrerName;
	}

	public void setReferrerName(String referrerName) {
		this.referrerName = referrerName;
	}

}
